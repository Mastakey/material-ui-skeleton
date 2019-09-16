import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const style = {
    Paper: { 
        padding: 20, 
        marginTop: 10, 
        marginBottom: 10,
        marginRight: 10
    }
}

export class Main extends Component {
    render() {
        return (
          <div>
            <Grid container>
              <Grid item sm>
                <LeftPane style={style.Paper} />
              </Grid>
              <Grid item sm>
                <RightPane style={style.Paper} />
              </Grid>
            </Grid>
          </div>
        );
    }
}

export default Main
