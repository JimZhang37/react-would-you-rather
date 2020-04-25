import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { seperateQuestions } from '../utils/helper'

export default class QuestionList extends Component {




    render() {
        const {ids} = this.props
        console.log(ids, "this is ids")
        return (

                <div className='dashboard-list'>
                    { ids.map(id => <Question key={id} id={id}></Question>)} }
                </div>

        )
    }
}
