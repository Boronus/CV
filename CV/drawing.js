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

    var c=document.getElementById("photoshop-skills");
    var ctx=c.getContext("2d");
    ctx.fillStyle = colorB;
    ctx.fillRect(0,0,150,10);
    ctx.fillStyle = colorB;
    ctx.fillStyle = colorA;
    ctx.fillRect(0,0,70,10);

    var c=document.getElementById("illustrator-skills");
    var ctx=c.getContext("2d");
    ctx.fillStyle = colorB;
    ctx.fillRect(0,0,150,10);
    ctx.fillStyle = colorB;
    ctx.fillStyle = colorA;
    ctx.fillRect(0,0,110,10);

    var c=document.getElementById("indesign-skills");
    var ctx=c.getContext("2d");
    ctx.fillStyle = colorB;
    ctx.fillRect(0,0,150,10);
    ctx.fillStyle = colorB;
    ctx.fillStyle = colorA;
    ctx.fillRect(0,0,20,10);

    var c=document.getElementById("dreamweaver-skills");
    var ctx=c.getContext("2d");
    ctx.fillStyle = colorB;
    ctx.fillRect(0,0,150,10);
    ctx.fillStyle = colorB;
    ctx.fillStyle = colorA;
    ctx.fillRect(0,0,135,10);

    var c=document.getElementById("aftereffects-skills");
    var ctx=c.getContext("2d");
    ctx.fillStyle = colorB;
    ctx.fillRect(0,0,150,10);
    ctx.fillStyle = colorB;
    ctx.fillStyle = colorA;
    ctx.fillRect(0,0,30,10);

    var c=document.getElementById("htmlcss-skills");
    var ctx=c.getContext("2d");
    ctx.fillStyle = colorB;
    ctx.fillRect(0,0,150,10);
    ctx.fillStyle = colorB;
    ctx.fillStyle = colorA;
    ctx.fillRect(0,0,80,10);
}