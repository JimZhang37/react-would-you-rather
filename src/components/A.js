import React, {Component} from 'react'
import UserList from './UserList'
import OptionStat from './OptionStat'
import QuestionResult from './QuestionResult'
import {users,questions as Qs } from '../utils/_DATA'
class A extends Component {


    
    render(){
        const qIds = Object.keys(Qs)
        const {id, author, optionOne, optionTwo} = Qs[qIds[0]]
        const countOne = optionOne.votes.length
        const countTwo = optionTwo.votes.length

        const avatarURL = 'http://i.pravatar.cc/400?img=70'
        const option1 = {
            text: optionOne.text,
            count: countOne,
            total: countOne+countTwo,
            yourChoice: true,
        }
        const option2 = {
            text: optionTwo.text,
            count: countTwo,
            total: countOne+countTwo,
            yourChoice: false,
        }

        return (
            <div>
                <QuestionResult value={{author, avatarURL, option1, option2}} />

            </div>
        )
    }
}

export default A