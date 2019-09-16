import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

export class LeftPane extends Component {
    render() {
        return (
            <Paper style={this.props.style}>
                Left Pane
            </Paper>
        )
    }
}

export default LeftPane
