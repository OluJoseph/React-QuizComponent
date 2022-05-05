import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {

    constructor(props){
        super(props);

        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick (buttonText) {
        if (this.props.quiz_question.answer === buttonText) {
            this.setState({incorrectAnswer: false})
            this.props.showNextQuestionHandler();
        }else{
            this.setState({incorrectAnswer: true})
        }
    }

    render(){
        const instruction = this.props.quiz_question.instruction_text;
        return (
            <main>
                <section>
                    <p>
                        {instruction}
                    </p>
                </section>
                <section className='buttons'>
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map((option, index) => {
                                return <QuizQuestionButton button_text={option} key={index} clickHandler={this.handleClick.bind(this)}/>
                            })
                        }
                    </ul>
                </section>
                
                {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
            </main>
        )
    }
};


export default QuizQuestion;