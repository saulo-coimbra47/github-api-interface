import React from 'react';
import * as S from './styled';

const Button = (props) => {

    const { visible, Click, Focus } = props;

    return visible ? <S.Button style={{visibility: 'visible'}} type="submit" onFocus={Focus} onClick={Click}>Buscar</S.Button> : <S.Button style={{visibility: 'hidden'}} >Buscar</S.Button>
}

export default Button;