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
        const canvas = this.refs.canvas2;
        const ctx = canvas.getContext("2d");
        const img = this.refs.image;

        const render = (time) => {
            this.tick(time,ctx,img)
        };

        const init = time => {

            this.setState(
                {prevTime: time},
                () => {requestAnimationFrame(render);}
            );
        };

        requestAnimationFrame(init);

        //console.log('hite2', this.props.height);
    }

    //TICK//
    tick (time,ctx,img) {
        let elapsed = time - this.state.prevTime;

        this.setState({
            prevTime: time
        });

        const w = this.props.width;
        const h = this.props.height;

        const x = w/2;
        const y = h/2;

        this.makeShip(x, y, elapsed, ctx, img);

        const render = (time) => {
            this.tick(time,ctx);
        };

        requestAnimationFrame(render);
    };

    makeShip(x, y, brightness,ctx,img){

        //ctx.fillStyle = 'green';
        //ctx.fillRect(x, y, 10, 10);
            img.onload = () => {
                ctx.drawImage(img, 30, 30);
            }
    };

    render() {
        console.log('hite2', this.props.height);
        return(
            <div id='canvas2'>
                <canvas ref="canvas2" width={this.props.width} height={this.props.height} />
                <img ref="image" src={ship} className="hidden" />
            </div>
        )
    }
}
export default Canvas2
