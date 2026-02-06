/*const price = 500
let product = "food"
const tax = 5
let total = price + tax
console.log(product)
console.log(total)*/

/*var fruitname = "apple"
var count = 5
var price = 50
var total = count * price
console.log(fruitname,total)*/


/*var a =5
var b = +a
c=a+b
console.log(c)*/

/*function samsung()
{
    console.log("samsung")
}
function oppo()
{
    console.log("oppo")
}
samsung()
oppo()*/

/*function add()
{
    var a = 10
    var b = 20
    c = a+b
    console.log(c)
}
add()*/
/* 
var factor = "kamal"
var fplayer = "dhoni"
var fmovie = "anbe sivam"
*/
/*function favourite()
{

    console.log("Favourite Actor:"+factor)
    console.log("Favourite player:"+fplayer)
    console.log("Favourite movie:"+fmovie)
}
favourite()*/


/*function area(length,breadth)
{
    console.log(length*breadth)
}
area(10,5)*/

/*function add(a,b)
{
    return (a+b)
}
var totel =add(1,2)
console.log(totel)
*/

/*
var rain = true
var homework = true
var cookies = false
var brush = true
var birthday = false

if(rain)
{
    console.log("Take an Umbrella")
}
else{
    console.log("enjoy the sunshine")
}

if (homework) {
    console.log("Great job")
} else {
    console.log("Finish it")
}

if (cookies) {
    console.log("Would you like a cookie")
} else {
    console.log("bake more")
}
*/

/*
var score = 60
if (score < 50) {
    console.log("You need to improve")
}
if( score > 50 && score <=70){
    console.log("Good job!")
}
if( score > 70){
    console.log("Excellent performance")
}
*/

/*
<input type="" id="num1">
<input type="" id="num2">
<button onclick="addition()">ADD</button>
<p id="result">Result:</p>

<script>

    //selecting the input and result
    var box1 = document.getElementById("num1")
    var box2 = document.getElementById("num2")
    var result = document.getElementById("result")



    //making a function 
    function addition()
    {
        //taking the inputs
        var box1value = Number(box1.value)
        var box2value = Number(box2.value)
        //additing the inputs
        var add = box1value+box2value
        result.textContent = add
    }

</script>
*/ 

/*
<input type="" id="guessnum">
<button onclick="check()">Check</button>
<p id="result">You are right/wrong!</p>
<p id="score">score:10</p>



<script>

    var guessnum = document.getElementById("guessnum")
    var result = document.getElementById("result")
    var randomnum = Math.floor(Math.random()*10)+1
    var score = document.getElementById("score")
    var totalscore = 10

    function check()
    {
        var enternum = guessnum.value
        if(randomnum == enternum)
    {
        result.textContent = "you are right"
        totalscore = totalscore+1
        score.textContent = "score:"+totalscore
        alert("you are right")
    }
        else{
        result.textContent="you are wrong"
        totalscore = totalscore-1
        score.textContent = "score:"+totalscore
    }
    }

</script>
*/


//todo list
/*

<input type="" id="input">
<button id="add" onclick="change()">ADD</button>
<ul id="list">
    <li>Hello
        <button id="delete" onclick="deleteitem(event)">delete</button>
    </li>
</ul>



<script>

    //selecting list
    var ul = document.getElementById("list")
    //selecting input
    var input = document.getElementById("input")

    function change()
    {
        var listitem = document.createElement("li")
        listitem.innerHTML= input.value + "<button onclick='deleteitem(event)'>delete</button>"
        ul.append(listitem)
    }
    function deleteitem(event)
    {
        event.target.parentElement.remove()
    }

</script>
*/ 


const apiKey = "1c4d80d99b12b268bc8a92a5d0b58107";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=chennai";

async function checkWeather(){
    const response = await fetch(apiUrl + '&appid=${apikey}');
    var data = await response.json();

    console.log(data);
}

checkWeather()