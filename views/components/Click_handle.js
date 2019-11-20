 
 
import React from 'react';

class Click_handle extends React.Component{
    
    render() {
    console.log("click props", this.props)
        return(
            <div className = {"click_handle"} onClick={this.props.handleSlider}>
                <div className = {this.props.toggleSlider ? "trapezoid2" : "trapezoid"}>
                    <div className = {"click_tab"} onClick={this.props.handleSlider}/>
                </div>
            </div>
        );
    }
}

export default Click_handle;