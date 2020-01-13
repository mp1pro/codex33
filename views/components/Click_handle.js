 
 
import React from 'react';

class Click_handle extends React.Component{
    
    render() {
        let onClick = '';
        let onTouchStart= '';
    console.log("click props", this.props)
    if(this.props.mobileView){
        onClick = '';
        onTouchStart= 'this.props.handleSlider';
    }else{
        onClick = 'this.props.handleSlider';
        onTouchStart= '';
    }
        return(
            <div className = {"click_handle"} onClick={this.props.handleSlider}>
                <div className = {this.props.toggleSlider ? "trapezoid2" : "trapezoid"}>
                    <div className = {"click_tab"} onTouchMove={touchMoveEvent => onTouchStart(touchMoveEvent) onClick={onClick}} />
                </div>
            </div>
        );
    }
}

export default Click_handle;