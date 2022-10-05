import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import { FeedbackProvider } from "./context/FeedbackContext"; 
import About from "./pages/About";
import AboutIcon from "./components/AboutIcon";
import {Link} from "react-router-dom";

function App(){
    return (
        <FeedbackProvider>
            <Router>
                <Routes>
                    <Route path="/" 
                    element = {
                        <>
                            <Header text="Feedback UI" />
                            <FeedbackForm  />
                            <FeedbackStats />
                            <div className="container">
                                <FeedbackList />
                            </div>
                            <AboutIcon />
                        </>
                    }>               
                    </Route>

                    <Route path= "/about" element={<About/>} />
                </Routes>
            </Router>
        </FeedbackProvider>
    )
};

export default App;