import React, { Component } from 'react';
import { connect } from 'react-redux'
import {handleInitialData} from '../actions/shared'
import QuestionList from './QuestionList';
import Login from './Login';
import Nav from './Nav'


class App extends Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    render() {
        const {authedUser} = this.props

        return (
            <div >
            <Nav />
                {authedUser?<QuestionList />:<Login />}
                
            </div>
        );
    }
}
function mapStateToProps({ authedUser}) {
    return { authedUser }
}
export default connect(mapStateToProps)(App);
