import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';
import StatusCount from '../UserStatusCount/index';
import UserInfo from '../UserInfo';

const Profile = () => {

    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.WrapperImage 
                src={githubState.user.avatarUrl} alt="Profile avatar"
            />
            <S.WrapperInfoUser>
                <UserInfo />
                <StatusCount />
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile;