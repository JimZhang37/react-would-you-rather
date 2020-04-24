import React, { Component } from 'react'
import { connect } from 'react-redux'


class Question extends Component {

    render() {
        const { question,avartarURL} = this.props


        
        return (
            <div className='tweet'>
                <img className='avatar'
                src={avartarURL}/>
       
                <div>
                    <div>
                        this question's id is {question.author}
                    </div>
                    <div>
                        this question's icon
                    </div>
                    <div>
                        this question's button
                    </div>
                </div>

            </div>

        )
    }
}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id]
    const a = users['sarahedo']
 

    return { avartarURL:"aaa",question }
}
export default connect(mapStateToProps)(Question)