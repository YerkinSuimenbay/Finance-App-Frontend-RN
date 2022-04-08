import { FeedbackActionTypes } from "../actions/feedback"


const initialState = {
    visible: false,
    message: '',
    type: '' // success || danger
}

export const feedbackReducer = (state=initialState, action) => {
    switch (action.type) {
        case (FeedbackActionTypes.SHOW_FEEDBACK):
            return { visible: true, message: action.payload.message, type: action.payload.type }
        case (FeedbackActionTypes.HIDE_FEEDBACK):
            return { visible: false, message: '', type: '' }
        default:
            return state
    }
}