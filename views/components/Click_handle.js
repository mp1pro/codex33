 
 
import React from 'react';

class Click_handle extends React.Component{
    
    render() {
        let onClick = '';
        let onTouchStart= '';
    console.log("click props", this.props)
    if(this.props.isMobile){
        onClick = '';
        onTouchStart= this.props.handleSlider;
    }else{
        onClick = this.props.handleSlider;
        onTouchStart= '';
    }
        return(
            <div className = {"click_handle"} onTouchStart={onTouchStart}  onClick={onClick}>
                <div className = {this.props.toggleSlider ? "trapezoid2" : "trapezoid"}>
                    <div className = {"click_tab"} />
                </div>
            </div>
        );
    }
}

export default Click_handle;