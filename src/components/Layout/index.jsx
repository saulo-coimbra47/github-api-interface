import React, { Fragment }  from 'react';
import * as S from "./styled";
import Header from '../Header/index';
import useGithub from '../../hooks/github-hooks';

const Layout = ({ children }) => {

  const { githubState } = useGithub();

  return (
    <Fragment>
    <Header />
        <S.WrapperLayout>
            {githubState.loading ? <p>Loading</p> : <Fragment>{children}</Fragment>}
        </S.WrapperLayout>
    </Fragment>
  )
}

export default Layout;
