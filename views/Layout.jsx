//const React = require('react');
import React from 'react';

import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
    Switch,
 BrowserRouter
} from 'react-router-dom';

import HTML from './components/HTML';
    import Head from './components/Head';
    import Body from './components/Body';
        import Testing from './components/Testing';
        import Header from './components/Header';
            import Header_title_slogan from './components/Header_title_slogan';
            import Header_menu_nav from './components/Header_menu_nav';
        import Adsense_box_mobile from './components/Adsense_box_mobile';
        //import Main from './components/Main';
            import Nav from './components/Nav';
            import Share from './components/Share';
            import Right from './components/Right';
        import Footer from './components/Footer';


import GraphQL from '../util/GitGraphQL';

class Layout extends React.Component{
//module.exports = React.createClass({
	//displayName: 'layout',

    constructor(props) {
        super(props);

        this.state = {
            title:"",
            lastCommit:'update NPM',
            lastTime:'Fri Feb 22 2019 14:49 EST'
        }

        this.handleClick = this.handleClick.bind(this);
        /*this.setTitle = this.setTitle.bind(this);*/
        this.getTitle = this.getTitle.bind(this);
    }

    handleClick() {
        alert('This suggests react was bundled correctly');
        console.log('tapped');
    }

    getTitle(){
        return(this.state.title);
    }

    componentDidMount() {

        console.log('I mount');
        //this.setTitle();

        //add graphQL request for last commit here
        GraphQL.getCommit().then(result => {

            let m = result.author.date;
            let d = new Date(m);
            //console.log(d.toString().slice(0,21)+' EST');
            //console.log('result 2',result);
            console.log('date ',d);
            this.setState({

                lastCommit: result.message,
                lastTime: d.toString().slice(0,21)+' EST'//result.commitTime
            });
        });
    }

/*    setTitle(){
        this.setState({title: this.props.params.article});
        console.log('set title to'+ this.props.params.article)
    }*/

    render() {
		let custom = this.props.custom;
        console.log(this.props.match);
        /*import About from './About';*/
        return(
			<HTML>

            {/*Head Component*/}
			<Head />

            {/*Body Component*/}
			<Body>
                {/*Testing Component
                <Testing
                    handleClick={this.handleClick}
                    lastCommit={this.state.lastCommit}
                    lastTime={this.state.lastTime}
                />
                */}
                {/*Header Component
                <Header>
                    <Header_title_slogan/>
                    <Header_menu_nav/>
                </Header>
                */}

                {/*Adsense_box_mobile Component
                <Adsense_box_mobile/>
                */}
                

                {/*TODO; main should only contain this.props.children*/}
                {/*<main>*/}
                    {/*TODO; Get rid of this div className="row"*/}
                    {/*<<div className="row">*/}

                        {/*TODO; Nav should have menu-items passed in as props
                        <Nav/>
                        */}
                        

                        {/*Share Component
                        <Share/>
                        */}

                        {/*Children from routing appear here
                        {this.props.children}
                        */}
                        {/*Right Component
                        <Right/>
                        */}

                    {/*</div>*/}
                {/*</main>*/}

                {/*Footer Component*/}
                <Footer/>

			<script dangerouslySetInnerHTML={{
				__html: 'window.PROPS='+ JSON.stringify(custom)
			}}/>
			<script src="/bundle.js" />
			</Body>
			</HTML>
        );
    }
}

export default Layout;


