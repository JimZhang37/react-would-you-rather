export function formatQuestion({ question, user }) {
    return {

        avatarURL: user.avatarURL,
        ...question
    }
}

export function seperateQuestions({ authedUser, questions, users }) {
    const qIds = Object.keys(questions)
    const qq = Object.keys(users[authedUser]['answers'])
    // console.log(qq)
    const answered = qIds.filter(qId => qq.includes(qId))
    const unanswered = qIds.filter(qId=> !qq.includes(qId))
    return {
        answered,
        unanswered
    }
}