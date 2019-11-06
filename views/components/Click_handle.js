 
 
import React from 'react';

class Click_handle extends React.Component{
    render() {
        
        return(
            <div className = {"click_handle"} onClick={this.props.handleSlider}></div>
        );
    }
}

export default Click_handle;