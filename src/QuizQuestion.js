import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

    handleClick = (buttonText) => {
        if (this.props.quiz_question.answer === buttonText) this.props.showNextQuestionHandler();
    }

    render(){
        const answerOptions = this.props.quiz_question.answer_options,
              instruction = this.props.quiz_question.instruction_text;
        return (
            <main>
                <section>
                    <p>
                        {instruction}
                    </p>
                </section>
                <section className='buttons'>
                    <ul>
                        {answerOptions.map((option, index) => {
                            return <QuizQuestionButton button_text={option} key={index} clickHandler={this.handleClick.bind(this)}/>
                        })}
                        
                    </ul>
                </section>
            </main>
        )
    }
};


export default QuizQuestion;