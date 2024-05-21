var compArray=[]
var userArray=[]
var buttons=["green","red","yellow","blue"]
var gameStart=false
var level=0 

// const fs = require('fs');






function playSound(sound){
  var audio=new Audio("sounds/"+sound+".mp3");
  audio.play();
}

function keypressHandler(){
  if(gameStart==false){
    gameStart=true
    computerPlay()
    document.removeEventListener("keypress",keypressHandler)
  }
}

 


  $("button").click(function(event){
    var userChosenColor=event.target.id
    userArray.push(userChosenColor)
    console.log(userArray)
    playSound(userChosenColor)
    checkAnswer(userArray.length-1)
  });


function checkAnswer(currentIndex){
  if(compArray[currentIndex]==userArray[currentIndex]){
      console.log("correct")
      if(compArray.length==userArray.length){
        setTimeout(computerPlay,900)
        }
    }
  else{
    console.log("wrong")
    startOver()
  }   
}

function startOver(){
  // console.log("wrong")
  playSound("wrong")
   $("body").addClass("wrong")
  setTimeout(function(){$("body").removeClass("wrong")},200);
   $(".heading").text("Game over! press anykey to restart")
   gameStart=false
   level=0
   compArray=[]
   document.addEventListener("keypress",keypressHandler)
}
  





function computerPlay(){
  // fs.readFile("highscore.txt",'utf8',(err,data)=>{
  //   console.log('File contents:', data);
  // });
  // highScore=data
  // $(".highScore").text("High Score :"+highScore)
  userArray=[]
  level++
  // highScore++
  // const data =highScore
  // fs.writeFile('highcore.txt', data, () => {
  //  console.log('File written successfully');
  // });
  $(".heading").text("Level "+level)
  var compNum=Math.floor(Math.random()*4)
  var chosenColor=buttons[compNum]
  compArray.push(chosenColor)
  var button=$("#"+chosenColor)
  button.addClass("active")
  setTimeout(function(){button.removeClass("active")},200)
  playSound(chosenColor)
}


  


    document.addEventListener("keypress",keypressHandler)












