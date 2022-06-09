import React from 'react';
import App from './App';
import { ResetCSS } from './components/Global/resetCSS';
import GithubProvier from './providers/github-provider';

const Providers = () => {
  return (
    <main>
        <GithubProvier>
            <ResetCSS />
            <App />
        </GithubProvier>
    </main>
  )
}

export default Providers;