import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionList from './QuestionList';
import Login from './Login';
import Nav from './Nav'
import {withRouter, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import QuestionAll from './QuestionAll'
import PrivateRoute from './PrivateRoute';
class App extends Component {
    componentDidMount() {

        this.props.dispatch(handleInitialData())

    }

    render() {
        const { authedUser, match } = this.props
        const {url, path} = match
        console.log('url', match)
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <PrivateRoute exact path='/'>
                            <QuestionAll />
                        </PrivateRoute>
                        <PrivateRoute exact path='/new'>
                            <New />
                        </PrivateRoute>
                        <PrivateRoute exact path='/question/:id'>
                            <Question />
                        </PrivateRoute>
                        <Route path='/login'>
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </Router>




        );
    }
}
function mapStateToProps({ authedUser }, { match }) {
    console.log("authedUser is: ", authedUser)
    console.log("match: ", match)
    return { authedUser }
}
export default connect(mapStateToProps)(App);
