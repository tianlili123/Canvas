/* 
    小球类 
*/

class Ball {
    constructor(props){
        this.x = 0;
        this.y = 0;
        this.r = 20;
        this.vx = 0;    //小球横向的速度
        this.vy = 0;    //小球纵向的速度
        this.scaleX = 1;
        this.scaleY = 1;
        this.strokeStyle = 'rgba(0,0,0,0)';
        this.fillStyle = 'rgb(57,119,224)';
        this.alpha = 1;
        Object.assign(this, props);
        return this;
    }
    render(ctx){
        let {x, y, r, scaleX, scaleY, fillStyle, strokeStyle, alpha} = this;
        ctx.save();
        ctx.translate(x,y);
        ctx.scale(scaleX,scaleY);
        ctx.strokeStyle = strokeStyle;
        ctx.fillStyle = fillStyle;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        return this;
    }
    //用来判断当前鼠标的坐标点在小球的绘制坐标之内  pos鼠标的坐标点
    isPoint(pos){
        let {x,y} = pos;    //接收传过来的x y 值
        //判断 半径大于等于 两个点之间的距离 Math.sqrt 开方的意思  **2平方
        return this.r >= Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
    }
}