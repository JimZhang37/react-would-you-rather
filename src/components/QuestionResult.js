import OptionStat from './OptionStat'
import React from 'react'



function QuestionResult(props){
    const {author, avatarURL, option11, option21} = props.value

    return (
        <div className='questionResult'>
            <div>{`Asked By ${author}`} </div>
            <div className='tweet'>
                <img 
                src={avatarURL}
                className='avatar' />

                <div className='tweet-info'>
                    <h3>Result:</h3>
                    <OptionStat option={option11}/>
                    <OptionStat option={option21}/>
                </div>

            </div>
        </div>
    )
}

export default QuestionResult