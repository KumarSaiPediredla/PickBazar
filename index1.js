var deadline = new Date("Dec 8, 2022 17:23:00").getTime();
var x= setInterval(
    function()
{
    var now = new Date().getTime();
    var remainingtime  = deadline - now;
    var days = Math.floor(remainingtime/(24*60*60*1000));
    var hours = Math.floor((remainingtime % (24*60*60*1000))/(60*60*1000));
    var minutes = Math.floor((remainingtime % (60*60*1000))/(60*1000));
    var seconds = Math.floor((remainingtime % (60*1000))/(1000));
    document.getElementById("countdown").innerHTML=days + "d :" + hours + "hr : " + minutes + "min : " + seconds + "sec";
    if(remainingtime<0)
    {
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";
    }
},1000
);