import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
// import QuestionList from './QuestionList';
import Login from './Login';
import Navigation from './Nav'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import QuestionAll from './QuestionAll'
import PrivateRoute from './PrivateRoute';
import QuestionView from './QuestionView'
import UserList from './UserList'
import QuestionNew from './QuestionNew'
import NotFound from './NotFound'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleInitialData())
    }, [dispatch])

    return (
        <Router>
            <Fragment>
                <Navigation />
                <Switch>
                    <PrivateRoute path='/list'>
                        <QuestionAll />
                    </PrivateRoute>
                    <PrivateRoute exact path='/'>
                        <Redirect to='/list'></Redirect>
                    </PrivateRoute>
                    <PrivateRoute exact path='/questions/:question_id'>
                        <QuestionView />
                    </PrivateRoute>
                    <PrivateRoute exact path='/leaderboard'>
                        <UserList />
                    </PrivateRoute>
                    <PrivateRoute path='/add'>
                        <QuestionNew />
                    </PrivateRoute>
                    <PrivateRoute path='/not_found'>
                        <NotFound />
                    </PrivateRoute>
                    <Route path='/login'>
                        <Login />
                    </Route>
                </Switch>
            </Fragment>
        </Router>
    );
}

export default App;
