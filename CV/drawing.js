/**
 * Created by Дима on 21.08.2016.
 */
function bb()
{
    var colorA = "rgb(61,108,176)";
    var colorB = "rgb(130,130,130)";
    var c = document.getElementById("skills-creative");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    for (i=1;i<12;i++) {
        ctx.beginPath();
        ctx.arc(i*25, 10, 10, 0, 2 * Math.PI, false);
        if(i<9)
            ctx.fillStyle = colorA;
        else
            ctx.fillStyle = colorB;
        ctx.fill();
    }

    var c = document.getElementById("skills-teamwork");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    for (i=1;i<12;i++) {
        ctx.beginPath();
        ctx.arc(i*25, 10, 10, 0, 2 * Math.PI, false);
        if(i<11)
            ctx.fillStyle = colorA;
        else
            ctx.fillStyle = colorB;
        ctx.fill();
    }

    var c = document.getElementById("skills-innovate");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    for (i=1;i<12;i++) {
        ctx.beginPath();
        ctx.arc(i*25, 10, 10, 0, 2 * Math.PI, false);
        if(i<6)
            ctx.fillStyle = colorA;
        else
            ctx.fillStyle = colorB;
        ctx.fill();
    }

    var c = document.getElementById("skills-communication");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    for (i=1;i<12;i++) {
        ctx.beginPath();
        ctx.arc(i*25, 10, 10, 0, 2 * Math.PI, false);
        if(i<11)
            ctx.fillStyle = colorA;
        else
            ctx.fillStyle = colorB;
        ctx.fill();
    }
}