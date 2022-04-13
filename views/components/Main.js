/**
 * Created by mp1pro on 12/14/20.
 */

import React from 'react';

class Main extends React.Component{
    render() {
        return(
            <main
                style={{height:this.props.height}}
            >
            {this.props.children}
            {/*codex33 coming soon*/}
            </main>
        );
    }
}

export default Main;
