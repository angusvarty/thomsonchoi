var c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");
ctx.translate(0, c.height);



const xArr = [0]
const yArr = [45]

const ux = 70
const uy = 150

const ay = -9.8
const dt = 1/60

const coRes = 0.85


//complete x1
xArr.push(xArr[0] + (ux * dt))
yArr.push(yArr[0] + (uy * dt) + (1/2 * ay * dt**2))

for (let n=1; n<1000; n++) {

    xArr[n+1] = (2 * xArr[n]) - xArr[n-1]
    yArr[n+1] = (2*yArr[n]) - yArr[n-1] + (ay * yArr[n] * dt * dt)


    if (yArr[n] < 0) {
        let dy = yArr[n-1] - yArr[n]
        yArr[n] = 0
        yArr[n+1] = dy * coRes
    }

    if (xArr[n] > 160) {
        let dx = xArr[n] - xArr[n-1]
        xArr[n] = 160
        xArr[n+1] = 160 - (dx * coRes)
    }

    if (xArr[n] < 0) {
        let dx = xArr[n-1] - xArr[n]
        xArr[n] = 0
        xArr[n+1] = dx * coRes
    }

}



for (let i=0; i<1000; i++) { 
    task(i); 
    } 
    
    function task(i) { 
    setTimeout(function() { 
        ctx.clearRect(0,0, c.width, -c.height);

        ctx.beginPath();
        ctx.arc((xArr[i] * (1280/160)), (yArr[i] * (-1280/160)), 10, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }, 1000/60 * i);

    console.log(yArr[i])

}