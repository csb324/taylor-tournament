import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import SongsPage from './containers/SongsPage';

// import UserPage from './containers/UserPage'
// import RepoPage from './containers/RepoPage'

export default <Route path="/" component={App}>
	<Route path="/songs" component={SongsPage} />
</Route>
