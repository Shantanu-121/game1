var ttl = ["rock","paper","scissors"];

$("button").click(function(){
    var randnum1 = Math.floor((Math.random())*3);
var randnum2 = Math.floor((Math.random())*3);
       document.querySelector(".player1").setAttribute("src","game"+randnum1+".png");
       document.querySelector(".player2").setAttribute("src","game"+randnum2+".png");
       decide (randnum1,randnum2);
})
function decide (num1,num2)
{
    if(num1===num2)
    {
        $("h1").text("Draw , now the food must be divided by scale !");
        $("h2").remove();
    }
    else if (num1===0 && num2===1)
    {
        $("h1").text("Player 2 won, the food god is with him !");
        $("h2").remove();

    }
    else if (num2===0 && num1===1)
    {
        $("h1").text("Player 1 won, the food god is with him !");
        $("h2").remove();

    }
    else if (num1===1 && num2===2)
    {
        $("h1").text("Player 2 won, the food god is with him !");
        $("h2").remove();

    }
    else if (num1===2 && num2===1)
    {
        $("h1").text("Player 1 won, the food god is with him !");
        $("h2").remove();

    }
    else if (num1===0 && num2===2)
    {
        $("h1").text("Player 1 won, the food god is with him !");
        $("h2").remove();

    }
    else if (num1===2 && num2===0)
    {
        $("h1").text("Player 2 won, the food god is with him !");
        $("h2").remove();

    }
}




//0 paper hai , 1 scissor hai , 2 rock hai 