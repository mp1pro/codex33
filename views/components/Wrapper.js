 
import React from 'react';

class Wrapper extends React.Component{
    render() {
        return(
            <div className="wrapper" style={{backgroundColor: 'black', color: 'white'}}>
                {this.props.children}
                {/*codex33 coming soon*/}
            </div>
        );
    }
}

export default Wrapper;