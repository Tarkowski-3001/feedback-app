import { createContext, useState } from "react";
import { v4 as uuidv4} from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] =useState([
        {
            id: 1,
            text: "from context",
            rating: 10,
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
        // setFeedback(feedback.push(newFeedback))
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id? {...item, ...updItem}: item)
        )
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }
    
    return (<FeedbackContext.Provider value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext;