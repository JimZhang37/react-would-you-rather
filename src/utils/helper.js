export function formatQuestion({ question, user }) {
    return {

        avatarURL: user.avatarURL,
        ...question
    }
}

export function seperateQuestions({ authedUser, questions, users }) {
    const answered = questions.map(question => users[authedUser]['answers'].includes(question.id))
    const unanswered = questions.map(question=> !users[authedUser]['answers'].includes(question.id))
    return {
        answered,
        unanswered
    }
}