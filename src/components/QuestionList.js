import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import {seperateQuestions} from '../utils/helper'

class QuestionList extends Component {




    render() {
        const questionIds = this.props.questionIds
        return (
            <div>
                <div>
                    type of questions
                </div>
                <div className='dashboard-list'>
                    {questionIds.map(id => <Question key={id} id={id}></Question>)}
                </div>
            </div>

        )
    }
}

function mapStateToProps({ questions,users }) {
    const auth = 'sarahedo'
    const user = users?users[auth]:null
    // const {answered, unanswered} = seperateQuestions({auth,questions,users})
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(QuestionList)