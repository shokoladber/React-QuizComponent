import React, { Component } from "react";

class QuizQuestion extends Component {

    constructor(props){
        super(props);
        this.state = {quiz_position: -1};
    };

    render() {
        console.log(this.props.quiz_questions);
        return(
            <main>
                <section>
                    <p>{this.props.quiz_question}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <li>{this.props.quiz_question}</li>
                    </ul>
                </section>
            </main>
        )
    }

};

export default QuizQuestion;