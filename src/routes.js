import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import SongsPage from './containers/SongsPage';

// import UserPage from './containers/UserPage'
// import RepoPage from './containers/RepoPage'

export default <Route path="/" component={App}>
	<IndexRoute component={SongsPage} />
</Route>
