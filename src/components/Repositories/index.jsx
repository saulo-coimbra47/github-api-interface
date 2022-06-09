import React, { useState, useEffect, Fragment } from 'react';
import useGithub from '../../hooks/github-hooks'
import RepositoryItem from '../RepositoryItem';
import * as S from './styled';

const Repositories = () => {

  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSerchRepos, setHasUserForSerchRepos] = useState();

  useEffect(() => {

    if(!!githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSerchRepos(!!githubState.repositories);
  }, [githubState.user]);

  return (

    <Fragment>
      {hasUserForSerchRepos ? 
      <S.WrapperTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
        <S.WrapperTabList>
            <S.WrapperTab>
                Repositories
            </S.WrapperTab>
            <S.WrapperTab>
                Stars
            </S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.repositories.map((item) => (
              <RepositoryItem
              key={item.id}
              name={item.name} 
              linkToRepo={item.owner.html_url}
              fullName={item.full_name} />
            ))}
          </S.WrapperList>
          
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.starred.map((item) => (
                <RepositoryItem
                key={item.id}
                name={item.name} 
                linkToRepo={item.owner.html_url}
                fullName={item.full_name} />
              ))}
          </S.WrapperList>
        </S.WrapperTabPanel>
      </S.WrapperTabs>
      : <Fragment></Fragment>}
    </Fragment>

    
  );
}

export default Repositories;
