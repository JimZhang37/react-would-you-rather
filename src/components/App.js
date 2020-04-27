import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList';
import Login from './Login';
import Nav from './Nav'
import {withRouter, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import QuestionAll from './QuestionAll'
import PrivateRoute from './PrivateRoute';
import QuestionView from './QuestionView'
import UserList from './UserList'
class App extends Component {
    componentDidMount() {

        this.props.dispatch(handleInitialData())

    }

    render() {
        const { authedUser, match } = this.props
        // const {url, path} = match
        // console.log('url', match)
        return (
            <Router>
                <Fragment>
                    <Nav />
                    <Switch>
                        <PrivateRoute  path='/list'>
                            <QuestionAll />
                        </PrivateRoute>
                        <PrivateRoute exact path='/'>
                            <Redirect to='/list'></Redirect>
                        </PrivateRoute>
                        {/* <PrivateRoute path='/new'>
                            <New />
                        </PrivateRoute> */}
                        {/* <Route path='/question/:id' component={QuestionView}> */}
                        <PrivateRoute exact path='/question/:id'>
                            <QuestionView />
                        </PrivateRoute>
                        <PrivateRoute exact path='/users'>
                            <UserList />
                        </PrivateRoute>
                        {/* </Route> */}
                        <Route path='/login'>
                            <Login />
                        </Route>
                    </Switch>
                </Fragment>
            </Router>




        );
    }
}
function mapStateToProps({ authedUser }, { match }) {
    // console.log("authedUser is: ", authedUser)
    // console.log("match: ", match)
    return { authedUser }
}
export default connect(mapStateToProps)(App);
