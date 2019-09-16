import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";

export class RightPane extends Component {
    render() {
        return (
            <Paper style={this.props.style}>
                Right Pane
            </Paper>
        )
    }
}

export default RightPane
