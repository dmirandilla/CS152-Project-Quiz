import React from "react";
import { bank } from "../questionList";

class Question extends React.Component {

    state = {
        questionText: this.props.questionText,
        answerOptions: this.props.answerOptions,
        image: this.props.image
    }

}
export default Question;