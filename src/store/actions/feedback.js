export const FeedbackActionTypes = {
    SHOW_FEEDBACK: 'SHOW_FEEDBACK',
    HIDE_FEEDBACK: 'HIDE_FEEDBACK',
}

export const showFeedback = (type, message) => {
    return { type: FeedbackActionTypes.SHOW_FEEDBACK, payload: { type, message } }
}   

export const hideFeedback = () => {
    console.log('called')
    return { type: FeedbackActionTypes.HIDE_FEEDBACK }
}