import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {incorrectAnswer : false}
    };

    handleClick(buttonText){
        buttonText === this.props.quiz_question.answer
        ? this.setState((prevState) => ({incorrectAnswer : prevState.incorrectAnswer = false})) &
            this.props.showNextQuestionHandler()
        : this.setState((prevState) => ({incorrectAnswer : prevState.incorrectAnswer = true}))
    };

    

    render() {
        return(
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul >
                        {this.props.quiz_question.answer_options.map((answerOption, index)=> {
                            return <QuizQuestionButton
                            key={index} 
                            button_text={answerOption}
                            clickHandler={this.handleClick.bind(this)}
                            >

                            </QuizQuestionButton>
                            })}
                    </ul>
                </section>
                {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right.</p> : null}
            </main>
        );
    }

};

export default QuizQuestion;