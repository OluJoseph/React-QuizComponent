import React, {Component} from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json')


class Quiz extends Component {
    constructor(props){
        super(props);

        this.state = {
            quiz_position: 1
        }
    }

    showNextQuestion () {
        const nextPosition = this.state.quiz_position + 1;
        this.setState({quiz_position: nextPosition})
    }

    handleResetClick () {
        this.setState({quiz_position: 1})
    }

    render(){
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;

        return (
            <main>
                {
                    isQuizEnd 
                    ? 
                    <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/>
                    :
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />
                }
            </main>
        
        )
    }
};


export default Quiz;