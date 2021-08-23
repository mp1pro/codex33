import React from 'react';

//const ship = require('https://res.cloudinary.com/demo/image/facebook/65646572251.jpg');
//const ship = require('../../public/assets/ship.png');
//console.log('ship =', require('../../public/assets/ship.png'));
import ship from '../../public/assets/ship.png';
import mship from '../../public/assets/mship.png';
//console.log('ship =', ship);

class Canvas2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevTime: 0,
            move: {},
            width: this.props.width,
            height: this.props.height,
            lazorNum: 0,
            lazorMove:0,
            throttleKeyUp: true
        }
        this.moveShip = this.moveShip.bind(this);
        this.makeShip = this.makeShip.bind(this);
        this.makeLazor = this.makeLazor.bind(this);
        this.tick = this.tick.bind(this);
        this.init = this.init.bind(this);
    }
    init(){
        const x = this.props.width/2 - (this.props.width/10)/2;
        const y = this.props.height - (this.props.height/10);
        
        const move = {
            x: x,
            y: y
        };
        
        return move;
    }
    componentDidMount() {
        let width=this.props.width;
        let height=this.props.height;
        
        const canvas = this.refs.canvas2;

        const ctx = canvas.getContext("2d");
        const img = this.refs.image;
        
        this.reset(ctx,width,height);
        
        window.addEventListener('keydown', this.moveShip);
        
        const render = (time) => {
            this.tick(time,ctx,img)
        };
        
        const animateNextFrame = (time) => {

            let move = this.init();
            
            this.setState(
                {
                    move: move,
                    lazorMove: move.y
                }
                ,
                () => {requestAnimationFrame(render)}
            );
        }
            
        // start the animation
        let ren = requestAnimationFrame(animateNextFrame);
    }
    
    //UNMOUNT
    componentWillUnmount() {
        window.removeEventListener('keydown', this.moveShip);
        window.cancelAnimationFrame(ren);
    }
    
    moveShip(event){
        //console.log('move', event);
        //console.log('move-state', this.state.move);
        
        //FOR SHOOTING
        if (event.key === " "){
            console.log('shoot6', event);
            //setState increment
            this.setState(prevState => {
                return {
                    lazorNum: prevState.lazorNum + 1
                }
            })
        }
        
        let moveSteps = (this.props.width/10) + (this.props.width/10)/2;
        let moveStepsHite = (this.props.height/10);
        
        let move = this.state.move;
        
        //MOVE SHIP
        if (event.key === "ArrowUp"){
            if(move.y < moveStepsHite){
                move.y = move.y
            }
            else{
                move.y -= moveStepsHite
            }
        } 
        else if (event.key === "ArrowDown"){
            if(move.y > (this.props.height - moveStepsHite*2)){
                move.y = move.y
            }
            else{
                move.y += moveStepsHite
            }
        } 
        else if (event.key === "ArrowLeft"){
            if(move.x < moveSteps){
                move.x = move.x
            }
            else{
                move.x -= moveSteps
            }
        } 
        else if (event.key === "ArrowRight"){
            if(move.x > this.props.width - moveSteps){
                move.x = move.x
            }
            else{
                move.x += moveSteps
            }
        }
        
        move = {
            x: move.x,
            y: move.y
        }
        
        this.setState(
            {
                move: move,
                lazorMove: move.y
            }
        )
        
        return move;
        
        
    }
    
    reset (ctx,width,height) {
        ctx.clearRect(0, 0, width, height);
    };

    //TICK//
    tick (time,ctx,img) {
        let move = this.state.move;
        let elapsed = time - this.state.prevTime;
         
        let fps = 60;
        let secInterval = 1000;
        let fpsInterval =  secInterval / fps;

        
        if(elapsed > fpsInterval){
            let prevTime = time - (elapsed % fpsInterval);
            this.setState(
                {prevTime: prevTime}
                ,
                () => {return this.makeShip(ctx, img, move)}
            );
        }
        else{
            window.cancelAnimationFrame(ren);
        }

        const render = (time) => {
            this.tick(time,ctx,img);
        };

        let ren = requestAnimationFrame(render);
    };

    makeShip (ctx, img, move){
        let width=this.props.width;
        let height=this.props.height;
        
        this.reset(ctx,width,height);
        
        
        
        ctx.drawImage(img, move.x, move.y, width/10, height/10);
        
        let ymove;
        if(this.state.lazorNum > 0 ){
            /*
            this.setState(prevState => {
                return {
                    throttleKeyUp: !prevState.throttleKeyUp
                }
            }) 
            */
            //this.makeLazor(ctx,move);
            //ymove += 150;
            ctx.fillStyle = '#f00';
            
            ymove = this.state.lazorMove === move.y ? move.y - (height/10) : this.state.lazorMove;
            
            ctx.fillRect(move.x + (width/10)/2, ymove, width/480, height/10);
            
            //console.log('move-state', this.state.move);
            //console.log('move.y6', move.y, 'this.state.lazorMove',this.state.lazorMove,'height',height,'ymove',ymove);    
            
            //setState here to move lazer
            if(this.state.lazorMove > 0){
                this.setState(prevState => {
                    return {
                        lazorMove: prevState.lazorMove - (height/10)
                    }
                })
            }
            else{
                //console.log('mov',move.y, 'this.state.lazorMov',this.state.lazorMove);
                this.setState(prevState => {
                        return {
                            //lazorMove: move.y 
                            //,
                            lazorNum: prevState.lazorNum - 1
                            //,
                            //throttleKeyUp: !prevState.throttleKeyUp
                        }
                    })

            }
        }

    };
    
    makeLazor(ctx,move){
        
        let width=this.props.width;
        let height=this.props.height;
        
        //this.reset(ctx,width,height);
        
        console.log('shoot');
        
        ctx.fillStyle = '#f00';
        let xmove = 400;
        let ymove = 300;
        //for loop to move lazer
        for(let x = 0; x < 7; x++){
            ctx.fillRect(xmove, ymove, 150, 150);
            ymove += 150;
        }
        
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.width !== prevProps.width) {
            let move = this.init();
            
            this.setState({move: move});
        }
    }

    render() {
        /*
        console.log('height', this.props.height);
        console.log('width', this.props.width);
        console.log('height', this.state.height);
        console.log('width', this.state.width);
        */
        return(
            <div id='canvas2'>
                <canvas id = 'responsive-canvas'  ref="canvas2" width={this.props.width} height={this.props.height}/>
                <img ref="image" src={this.props.mobileView === true || this.props.width < 720 ? mship : ship} className="hidden" />
            </div>
        )
    }
}
export default Canvas2
