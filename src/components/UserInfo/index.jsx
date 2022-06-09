import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const UserInfo = () => {
  const { githubState } = useGithub();
  return (
    <S.WrapperInfoText>
        <h1>{githubState.user.name}</h1>
        <S.WrapperUserData>
            <h3>User:</h3>
            <a href={githubState.user.htmlUrl} target={"_blank"} rel={'noreferrer'}>{githubState.user.login}</a>
        </S.WrapperUserData>
        <S.WrapperUserData>
            {githubState.user.bio}
        </S.WrapperUserData>
        <S.WrapperUserData>
            <h4>Company:</h4>
            <span>{githubState.user.company}</span>
        </S.WrapperUserData>
        <S.WrapperUserData>
            <h4>Location:</h4>
            <span>{githubState.user.location}</span>
        </S.WrapperUserData>
    </S.WrapperInfoText>
  )
}

export default UserInfo;