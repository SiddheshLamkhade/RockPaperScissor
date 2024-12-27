let userscore=0;
let computerscore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#computerscore");
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randind=Math.floor(Math.random()*3);//it will generate 0 to 2 number
    return options[randind];
}

const drawgame=()=>{console.log("game was draw");msg.innerText="Match Draw";msg.style.backgroundColor="maroon";};

const showwinner=(userWin,userchoice,compchoice)=>{
    if(userWin==true){

        console.log("YOU WIN");
        msg.innerText=`You Win ! Userchoice ${userchoice} beats Compchoice ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        userscorepara.innerText=userscore;

    }
    else{
        console.log("YOU lOSE");
        msg.innerText= `You Loose ! Compchoice ${compchoice} beats Userchoice ${userchoice}`;
        msg.style.backgroundColor="Red";
        computerscore++;
        compscorepara.innerText=computerscore;
    }}

const playGame = (userchoice)=>{
    console.log("User Choice = ",userchoice);
    //Generate computer choice
    const compchoice=gencompchoice();
    console.log("Computer Choice = ",compchoice);

    if(userchoice==compchoice){
        //draw game
        drawgame();
    }
    else{
        let userWin = true;
        if(userchoice==="rock"){
            //scissors , paper
            userWin = compchoice === "paper" ? false : true ;
            //this is ternary function, it stores 
        }
        else if(userchoice === "paper"){
            //rock, scissors
            userWin=compchoice ==="scissors"?false:true;
        }
        else{
            //rock, paper
            userWin=compchoice==="rock"?false:true;
        }
        showwinner(userWin,userchoice,compchoice);
    }
}

choices.forEach (
    (choice)=>choice.addEventListener("click",()=>{
        //console.log(choice);
        const userchoice=choice.getAttribute("id");;
        playGame(userchoice);     
    })
)