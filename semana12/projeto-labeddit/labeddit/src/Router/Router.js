import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GlobalState from '../Global/GlobalState'
import React from 'react';
import TopBar from '../Components/TopBar'
import FeedPage from '../Pages/FeedPage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import PostPage from '../Pages/PostPage'
import LoadingPage from '../Pages/LoadingPage'
import CreatePage from '../Pages/CreatePage'

export default function RouterNavigation() {
  return (
    <GlobalState>
        <Router>
          <TopBar/>
            <Switch>
                <Route exact path={'/'} component={LoadingPage} />
                <Route exact path={'/feed'} component={FeedPage} />
                <Route exact path={'/login'} component={LoginPage} />
                <Route exact path={'/register'} component={RegisterPage} />
                <Route exact path={'/post/:idPost'} component={PostPage} />
                <Route exact path={'/create_post'} component={CreatePage} />

                <Route><div>Error Page</div></Route>
            </Switch>
        </Router>
    </GlobalState>
  );
}

