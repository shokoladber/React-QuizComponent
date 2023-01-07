
import React, {Component} from 'react';
import QuizQuestion from './QuizQuestions.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    };

    render(){
        console.log(quizData.quiz_questions[0].instruction_text);
        return(
                <QuizQuestion/>
        );
    };
};

export default Quiz;