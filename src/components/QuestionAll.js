import React from 'react'
import { withRouter, NavLink, Route, useRouteMatch, useHistory, useLocation, Switch } from 'react-router-dom'
import QuestionList from './QuestionList'
import { connect } from 'react-redux'

function QuestionAll({ answeredIds, unanswerIds, match }) {
   

    console.log(match, answeredIds, unanswerIds)
    const {url, path } = match
    return (
        <div>
            <div>

                <NavLink to={`/answered`}>
                    Answered
                    </NavLink>
                <NavLink to={`/unanswered`}>Un Answered</NavLink>
            </div>
            {/* <QuestionList ids={answeredIds} />)} /> */}
            <Switch>

                <Route path={`/answered`} render={() => (<QuestionList ids={answeredIds} />)} />
                <Route path={`/unanswered`} render={() => (<QuestionList ids={unanswerIds} />)} />

            </Switch>
        </div>

    )
}


function mapStateToProps({ questions, users, authedUser }) {

    const user = users[authedUser]
    let answeredIds = Object.keys(user.answers)
    console.log("aaaanswed", answeredIds)
    const allIds = Object.keys(questions)
    let unansweredIds = allIds.filter(it => !answeredIds.includes(it))
    return {
        answeredIds: answeredIds
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        unanswerIds: unansweredIds
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    }
}
export default withRouter(connect(mapStateToProps)(QuestionAll))