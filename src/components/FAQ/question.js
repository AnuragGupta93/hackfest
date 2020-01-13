import React from 'react';

export default class Question extends React.Component{
    render(){
        return(
            <div className="question-block">
                <h4 className="question">{this.props.question}</h4>
                <div className="answer">
                    <p>{this.props.answer}</p>
                </div>
            </div>
        );
    }
}
