let message = 'Hello Web';
var value = 0;
var count = 0;
let start;

function draw(){
    var c = document.getElementById("myCanvas");
    c.setAttribute('width', 800);
    c.setAttribute('height', 800);
    var ctx = c.getContext("2d");
    ctx.shadowBlur = count / 1000;
    ctx.shadowColor = "yellow";
    ctx.fillStyle = "#602040";
    ctx.beginPath();
    ctx.arc(20 * Math.sin(count / 1000) * (Math.random() / 10) + 100, + 20 * Math.sin(count / 200) * (Math.random() / 10) + 100, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(20 * Math.sin(count / 600) * (Math.random() / 10) + 100, 20 * Math.sin(count / 600) * (Math.random() / 10) + 100, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(20 * Math.sin(count / 200) * (Math.random() / 10) + 100, 20 * Math.sin(count / 1000) * (Math.random() / 10) + 100, 50, 0, 2 * Math.PI);
    ctx.fill();
}

function increment(){
    value++;
    document.getElementById("value").innerHTML = value;
}

function step(timestamp){
    if(start === undefined){
        start = timestamp
    }
    const elapsed = timestamp - start;
    count += value;
    document.getElementById("elapsed").innerHTML = count;
    document.getElementById("progress").style.width = getWidth() + "%";
    draw();
    window.requestAnimationFrame(step);
      
}

function getWidth(){
    return count / 1000;
}

window.requestAnimationFrame(step);