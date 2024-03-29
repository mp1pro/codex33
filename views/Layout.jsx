//const React = require('react');
import React from 'react';

import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
    Switch,
    BrowserRouter,
    Redirect
} from 'react-router-dom';

import HTML from './components/HTML';
    import Head from './components/Head';
    import Body from './components/Body';
        import Wrapper from './components/Wrapper';
            import Testing from './components/Testing';
            import Header from './components/Header';
                import Header_title_slogan from './components/Header_title_slogan';
                import Title from './components/Title';
                import Header_menu_nav from './components/Header_menu_nav';
            import Adsense_box_mobile from './components/Adsense_box_mobile';
            //import Main from './components/Main';
                import Nav from './components/Nav';
                import Share from './components/Share';
                import Click_handle from './components/Click_handle';
                import Right from './components/Right';
            import Main from './components/Main';
                import Canvas from './components/Canvas';
                import Canvas2 from './components/Canvas2';
                import Countdown from './components/Countdown';
            import Footer from './components/Footer';


//import GraphQL from '../util/GitGraphQL';
import { css } from "@emotion/core";
import Loader from "react-spinners/PacmanLoader";

const override = css;

class Layout extends React.Component{
//module.exports = React.createClass({
	//displayName: 'layout',

    constructor(props) {
        super(props);

        this.state = {
            title:"",
            lastCommit:'update NPM',
            lastTime:'Fri Feb 22 2019 14:49 EST',
            toggleSlider: false,
            mobileView: false,
            innerHeight:"",
            innerWidth:"",
            loader: true,
            height:"",
            availHeight:"",
            devMode: false

        }
        this.handleSlider = this.handleSlider.bind(this);
        this.handleClick = this.handleClick.bind(this);
        /*this.setTitle = this.setTitle.bind(this);*/
        this.getTitle = this.getTitle.bind(this);
        this.isMobile = this.isMobile.bind(this);
        this.setLoader = this.setLoader.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.debounce = this.debounce.bind(this);

    }

    handleClick() {
        alert('This suggests react was bundled correctly');
        console.log('tapped');
    }

    getTitle(){
        return(this.state.title);
    }
    handleSlider(){
        //e.preventDefault();
        this.setState(prevState => ({
            toggleSlider: !prevState.toggleSlider
        }));
    }

    isMobile() {
        console.log('nav',navigator.userAgent);

        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            || navigator.userAgent.match(/Opera Mini/i)
            || navigator.userAgent.match(/IEMobile/i)) {

            this.setState({
                mobileView: true}, () => {
                console.log('ismobile',this.state.mobileView);
            });
        }
        else {
            this.setState({
                mobileView: false
            }, () => {
                console.log('ismobile: ',this.state.mobileView);
            });
        }

    }

    updateWindowDimensions() {
        let timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log('I set height');
            this.setState({
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth,
                availHeight: window.screen.availHeight,
                height: window.screen.height
            });
        }, 100);
    }

    debounce(fn, ms) {
        let timer;
        return (() => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                fn;
            }, ms);
        })();
    };

    setLoader(){
        console.log('set loader');
        //e.preventDefault();
        this.setState(prevState => ({
            loader: !prevState.loader
        }));
    }

    componentDidMount() {
        let {loader} = this.state;

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    this.isMobile();

    console.log('I mount');
    //this.setTitle();

    setTimeout(function(){
        if(loader){
            this.setLoader();
        }
    }.bind(this), 2000);

    //add graphQL request for last commit here
    /*GraphQL.getCommit().then(result => {

        let m = result.author.date;
        let d = new Date(m);
        //console.log(d.toString().slice(0,21)+' EST');
        //console.log('result 2',result);
        console.log('date ',d);
        this.setState({

            lastCommit: result.message,
            lastTime: d.toString().slice(0,21)+' EST'//result.commitTime
        });
    });*/
    }



/*    setTitle(){
        this.setState({title: this.props.params.article});
        console.log('set title to'+ this.props.params.article)
    }*/
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        //console.log("height: ", this.state.height);
		let custom = this.props.custom;
        //console.log("match: ",this.props.match);
        let {loader,innerHeight,innerWidth, mobileView, devMode} = this.state;
        //console.log("loader: ",loader);

        console.log("innerHeight: ", this.state.innerHeight);
        console.log("innerWidth: ", this.state.innerWidth);
        //console.log('height', this.state.height );
        //console.log('availHeight', this.state.availHeight );

        if(loader){
            return (
            <HTML><Head /><Body height={innerHeight}>
                <div className="sweet-loading">
                    <Loader
                        css={override}
                        size={15}
                        color={"red"}
                        loading={loader}
                    />
                </div>
                <script dangerouslySetInnerHTML={{
                    __html: 'window.PROPS='+ JSON.stringify(custom)
                }}/>
                <script src="/bundle.js" />
            </Body></HTML>);
        }

        return(
			<HTML>

            {/*Head Component*/}
			<Head />

            {/*Body Component*/}
			<Body>
			<Wrapper>
                {/*Testing Component
                <Testing
                    handleClick={this.handleClick}
                    lastCommit={this.state.lastCommit}
                    lastTime={this.state.lastTime}
                />
                */}
                {/*Header Component*/}
                <Header
                    height={innerHeight}
                    toggleSlider={this.state.toggleSlider}
                >
                    <Title/>
                    <Nav/>
                    <Click_handle
                        handleSlider={this.handleSlider}
                        isMobile={this.state.mobileView}
                        toggleSlider={this.state.toggleSlider}
                    />

                </Header>

                <Main height={innerHeight}>
                    {devMode
                        ?
                            <a href="games.codex33.com" />
                        :
                            <>
                                <Countdown/>
                                <Canvas height={innerHeight} width={innerWidth}/>
                                <Canvas2 height={innerHeight} width={innerWidth} mobileView={mobileView}/>
                            </>
                    }
                </Main>


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
                        </Wrapper>
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


