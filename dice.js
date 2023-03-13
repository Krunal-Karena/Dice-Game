var x=Math.floor((Math.random()*6)+1);
var y=Math.floor((Math.random()*6)+1);
if(x>y)
    document.getElementsByTagName("h2")[0].textContent="Player 1 win!!!";
else if(x<y)
    document.getElementsByTagName("h2")[0].textContent="Player 2 win!!!";
else
    document.getElementsByTagName("h2")[0].textContent="Both player win!!!";

function img1(y)
{
    switch(y)
    {
        case 1:
            document.getElementsByClassName("img1")[0].src = "images/dice1.png";
            break;
        case 2:
            document.getElementsByClassName("img1")[0].src = "images/dice2.png";
            break;
        case 3:
            document.getElementsByClassName("img1")[0].src = "images/dice3.png";
            break;
        case 4:
            document.getElementsByClassName("img1")[0].src = "images/dice4.png";
            break;
        case 5:
            document.getElementsByClassName("img1")[0].src = "images/dice5.png";
            break;
        case 6:
            document.getElementsByClassName("img1")[0].src = "images/dice6.png";
            break;    
    }
}
img1(x);
function img2(y)
{
    switch(y)
    {
        case 1:
            document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
            break;
        case 2:
            document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
            break;
        case 3:
            document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
            break;
        case 4:
            document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
            break;
        case 5:
            document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
            break;
        case 6:
            document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");
            break;    
    }
}
img2(y);

