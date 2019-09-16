import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

export class Footer extends Component {
    render() {
        return (
            <div>
                <Paper>
                    <AppBar position="static">
                        <Tabs value={0} aria-label="simple tabs example">
                            <Tab label="Item One" />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" />
                        </Tabs>
                    </AppBar>
                </Paper>

            </div>
        )
    }
}

export default Footer
