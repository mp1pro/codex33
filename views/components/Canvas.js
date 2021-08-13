/**
 * Created by mp1pro on 1/1/21.
 */

import React from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevTime: 0,
            stars: [],
            width: this.props.width,
            height: this.props.height
        }

    }

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        this.reset(ctx);

        const render = (time) => {
            this.tick(time,ctx)
        };

        const init = time => {
            let stars = this.makeStars(10000);

            this.setState(
                {prevTime: time, stars: stars},
                () => {requestAnimationFrame(render);}
            );
        };

        requestAnimationFrame(init);
    }

    //TICK//
    tick (time,ctx) {
        let elapsed = time - this.state.prevTime;

        this.setState({
            prevTime: time}, () => {
            this.moveStars(elapsed*0.1);
        });

        this.reset(ctx);

        const w = this.state.width;
        const h = this.state.height;

        const cx = w/2;
        const cy = h/2;

        let stars = this.state.stars;

        const count = stars.length;
        for (var i = 0; i < count; i++) {
            const star = stars[i];

            const x = cx + star.x/(star.z * 0.001);
            const y = cy + star.y/(star.z * 0.001);

            if (x < 0 || x >= w || y < 0 || y >= h){
                continue;
            }

            const d = (star.z/1000.0)
            const b = 1-d*d

            this.putPixel(x, y, b, ctx);
        }

        const render = (time) => {
            this.tick(time,ctx);
        };

        requestAnimationFrame(render);
    };

    reset (ctx) {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, this.props.width, this.props.height);
    };

    moveStars (distance)  {
        let stars = this.state.stars;

        const count = stars.length;

        for (var i = 0; i < count; i++) {
            const s = stars[i];
            s.z -= distance;
            while (s.z <= 1){
                s.z += 1000;
            }
        }
    }

    makeStars(count){
        const out = [];
        for (let i=0;i<count;i++){
            const s = {
                x: Math.random()*1600-800,
                y: Math.random()*900-450,
                z: Math.random()*1000
            };
            out.push(s);
        }
        return out;
    }

    putPixel(x, y, brightness,ctx){
        const intensity = brightness * 255;
        const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
        ctx.fillStyle = rgb;
        ctx.fillRect(x, y, 2, 2);
    };

    render() {
        //console.log('hite', this.props.height);
        //console.log('wit', this.props.width);
        return(
            <div>
                <canvas ref="canvas" width={this.props.width} height={this.props.height} />
            </div>
        )
    }
}
export default Canvas
