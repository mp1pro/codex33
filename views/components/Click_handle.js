 
 
import React from 'react';

class Click_handle extends React.Component{
    render() {
        return(
            <div className = {"click_handle"} onClick={this.props.handleSlider}>
                <div className = {"trapezoid"}>
                    <div className = {"click_tab"} onClick={this.props.handleSlider}/>
                </div>
            </div>
        );
    }
}

export default Click_handle;