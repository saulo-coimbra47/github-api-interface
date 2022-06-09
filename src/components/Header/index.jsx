import React, { useState } from 'react';
import * as S from './styled';
import Logo from './HeaderComponents/Logo';
import Input from './HeaderComponents/Input';
import Button from './HeaderComponents/Button';
import useGithub from '../../hooks/github-hooks';


const Header = () => {

  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () =>{
    if(!usernameForSearch) return;
    return getUser(usernameForSearch);
  }

  const setUNFS = (event) => {
    setUsernameForSearch(event.target.value);
  }

  const [btnVisibility, setBtnVisibility] = useState(false);

  const btnIsVisible = () => {
    setBtnVisibility(true);
  }

  const hideBtn = () => {
    setBtnVisibility(false);
  }

  const btnIsHidden = () => {
    setTimeout(hideBtn, 200);
  }

  return (
    <S.Wrapper>
        <Logo />
        <Input Focus={btnIsVisible} Blur={btnIsHidden} Change={setUNFS} />
        <Button visible={btnVisibility} Click={submitGetUser} Focus={btnIsVisible}/>
    </S.Wrapper>
  );
}

export default Header;