/**
 * Created by mp1pro on 9/29/18.
 */

import React from 'react';

class Header extends React.Component{
    render() {
        console.log("this.props", this.props)
        return(
            <header
                className = {this.props.toggleSlider ? "toggle" : ""}
                style={{
                    height:this.props.height,
                    marginTop: this.props.toggleSlider ? 0 : (0 - this.props.height)
                }}
            >
                {this.props.children}
            </header>
        );
    }
}

export default Header;