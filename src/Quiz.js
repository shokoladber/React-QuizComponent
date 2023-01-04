import React, { Component } from 'react';

let quizData = require('./quiz_data,json');

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }

    render() {
        return(
            <div>Quiz
//                <div className="QuizQuestion"
//                value="${quizData[0].instructions_text}$">
//                </div>;
            </div>;
        )

    };

};

export default Quiz;