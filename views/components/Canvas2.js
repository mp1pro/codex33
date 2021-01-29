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
        }

    }

    componentDidMount() {
        let width=this.props.width;
        let height=this.props.height;
        
        const canvas = this.refs.canvas2;
        
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        const img = this.refs.image;
        
        this.reset (ctx,width,height);
        
        const animateNextFrame = () => {
            
            // change an element's style here

            const x = width/2;
            const y = height-70;
           
            this.makeShip(x, y, ctx,img);
           
            // continue rendering at next frame
            requestAnimationFrame(animateNextFrame)
        }
            
        // start the animation
        requestAnimationFrame(animateNextFrame);
    }
    
    reset (ctx,width,height) {
        ctx.clearRect(0, 0, width, height);
    };

    //TICK//
    tick (time,ctx,img) {
        let elapsed = time - this.state.prevTime;

        this.setState({
            prevTime: time
        });

        const w = this.props.width;
        const h = this.props.height;

        const x = w/2;
        const y = h-70;

        this.makeShip(x, y, elapsed, ctx, img);

        const render = (time) => {
            this.tick(time,ctx);
        };

        requestAnimationFrame(render);
    };

    makeShip(x, y, ctx,img){

                ctx.drawImage(img, x, y, 60, 60);
    };

    render() {
        console.log('hite2', this.props.height);
        return(
            <div id='canvas2'>
                <canvas id = 'responsive-canvas'  ref="canvas2" />
                <img ref="image" src={ship} className="hidden" />
            </div>
        )
    }
}
export default Canvas2
