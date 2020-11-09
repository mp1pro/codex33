/**
 * Created by mp1pro on 9/29/18.
 */

import React from 'react';

class Body extends React.Component{
    render() {
        return(
            <body style={{backgroundColor: 'black', color: 'white', position: 'relative', height:this.props.height}}>
                {this.props.children}
                {/*codex33 coming soon*/}
            </body>
        );
    }
}

export default Body;