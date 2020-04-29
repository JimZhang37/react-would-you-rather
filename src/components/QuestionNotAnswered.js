import React, {useState} from 'react'

function QuestionNotAnswered(props) {
    const [choice, setChoice] = useState('optionOne')
    const handleChange= (e)=>{
        setChoice(e.target.value)
    }
    const {handleSubmit} = props
    const {author, option1, option2, } = props.value

    return (

        <div>
            <div>{author} asks</div>
            <form onSubmit={(e) => handleSubmit(e, choice)}>
                <input
                    type='radio'
                    id='option1'
                    key={option1}
                    value='optionOne'
                    defaultChecked={false}
                    onChange={handleChange}
                    name='choice'
                />
                <label >{option1}</label>
                <input
                    type='radio'
                    id='option2'
                    key={option2}
                    value='optionTwo'
                    defaultChecked={false}
                    onChange={handleChange}
                    name='choice'
                />
                <label >{option2}</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default QuestionNotAnswered