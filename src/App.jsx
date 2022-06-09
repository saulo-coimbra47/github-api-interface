import React, { Fragment } from 'react';
import Layout from './components/Layout';
import NoSearch from './components/NoSearch';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import useGithub from './hooks/github-hooks';

const App = () => {

  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? <Fragment>
        {githubState.loading ? (<p>Loading</p>) : ( 
        <Fragment>
          <Profile />
          <Repositories />
        </Fragment>
        )}
      </Fragment> : <NoSearch />}
      
      
    </Layout> 
  );
}

export default App;
