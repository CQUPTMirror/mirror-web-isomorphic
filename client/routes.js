import App from './containers/App'
import HomeListPage from './containers/HomeList';
import HomeHowtoPage from './containers/HomeHowto';
import HomeStatusPage from './containers/HomeStatus';
import EventsPage from './containers/Events';
import { Route, IndexRoute } from 'react-router'
import React from 'react'

export default (
<Route path="/" component={App}>
  <IndexRoute component={HomeListPage} />
  <Route path="/howto/:name" component={HomeHowtoPage} />
  <Route path="/status" component={HomeStatusPage} />
  <Route path="/events" component={EventsPage} />
</Route>
)
