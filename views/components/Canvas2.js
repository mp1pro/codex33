import React from 'react';

//const ship = require('https://res.cloudinary.com/demo/image/facebook/65646572251.jpg');
//const ship = require('../../public/assets/ship.png');
//console.log('ship =', require('../../public/assets/ship.png'));
import ship from '../../public/assets/ship.png';
//console.log('ship =', ship);

class Canvas2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevTime: 0,
            move: {},
            width: this.props.width,
            height: this.props.height
        }
        this.moveShip = this.moveShip.bind(this);
        this.makeShip = this.makeShip.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        let width=this.state.width;
        let height=this.state.height;
        
        const canvas = this.refs.canvas2;
        
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        const img = this.refs.image;
        
        this.reset(ctx,canvas.width,canvas.height);
        
        window.addEventListener('keydown', this.moveShip);
        
        const render = (time) => {
            this.tick(time,ctx,img)
        };
        
        const animateNextFrame = (time) => {
            
            // change an element's style here

            const x = (width/2)-30;
            const y = height-70;
            
            const move = {
                x: x,
                y: y
            };
            
            this.setState(
                {move: move}
                ,
                () => {requestAnimationFrame(render)}
            );
           
            // continue rendering at next frame
            //requestAnimationFrame(render)
        }
            
        // start the animation
        let ren = requestAnimationFrame(animateNextFrame);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.moveShip);
        window.cancelAnimationFrame(ren);
    }
    
    moveShip(event){
        console.log('move', event);
        console.log('move-state', this.state.move);
        
        let move = this.state.move;
        
        if (event.key === "ArrowUp"){
            move.y -= 100
        } 
        else if (event.key === "ArrowDown")
        {
            move.y += 100
        } 
        else if (event.key === "ArrowLeft"){
            move.x -= 100
        } 
        else if (event.key === "ArrowRight"){
            move.x += 100
        }
        
        move = {
            x: move.x,
            y: move.y
        }
        
        this.setState(
                {move: move}
        )
        
        return move;
        
        
    }
    
    reset (ctx,width,height) {
        ctx.clearRect(0, 0, width, height);
    };

    //TICK//
    tick (time,ctx,img) {
        
        let elapsed = time - this.state.prevTime;
         
        let fps = 60;
        let secInterval = 1000;
        let fpsInterval =  secInterval / fps;

        //let move = 
        if(elapsed > fpsInterval){
            let prevTime = time - (elapsed % fpsInterval);
            this.setState(
                {prevTime: prevTime}
                ,
                () => {this.makeShip(ctx, img)}
            );
        }

        const render = (time) => {
            this.tick(time,ctx,img);
        };

        let ren = requestAnimationFrame(render);
    };

    makeShip (ctx, img){
        let width=this.state.width;
        let height=this.state.height;
        
        this.reset(ctx,width,height);
        
        let move = this.state.move;
        ctx.drawImage(img, move.x, move.y, 60, 60);

    };

    render() {
        console.log('height', this.state.height);
        console.log('width', this.state.width);
        console.log('mover', this.state.move);
        return(
            <div id='canvas2'>
                <canvas id = 'responsive-canvas'  ref="canvas2" />
                <img ref="image" src={ship} className="hidden" />
            </div>
        )
    }
}
export default Canvas2
