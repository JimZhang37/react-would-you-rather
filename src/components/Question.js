import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Question extends Component {

    render() {
        const { question,avatarURL} = this.props
        // console.log(avartarURL,'avartal url')

        
        return (
            <div className='tweet'>
                <img className='avatar'
                src={avatarURL}
                
                />
       
                <div>
                    <div>
                         {question.author} asks:
                    </div>
                    <div>
                        Would You Rather...?
                    </div>
                    <Link to={`/question/${question.id}`}>
                        <button >View Poll</button>
                    </Link>
                </div>

            </div>

        )
    }
}

function mapStateToProps({ questions, users }, { id }) {
    const question = questions[id]
    const a = users[question.author]
    // console.log('avartar', a,a.avartarURL)

    return { avatarURL:a.avatarURL,question }
}
export default connect(mapStateToProps)(Question)