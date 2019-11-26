import React from 'react';

class Head extends React.Component{
    render() {
        return(
            <head>
                <title>{this.props.title}</title>
                <link rel='stylesheet' href='/style.css' />
                <link rel="shortcut icon" type="image/x-icon" href="./x.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </head>
        );
    }
}

export default Head;