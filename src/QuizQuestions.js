import React, { Component } from "react";

class QuizQuestion extends Component {

    constructor(props){
        super(props);
    };

    render() {
        console.log(this.props.quiz_question.answer_options);
        return(
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <li>{this.props.quiz_question.answer_options}</li>
                    </ul>
                </section>
            </main>
        );
    }

};

export default QuizQuestion;