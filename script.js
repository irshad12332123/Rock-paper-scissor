const compdispMove = document.querySelector("#comp-move");
const userMove = document.querySelector("#players-move");

const compdispScore = document.querySelector("#comp-score");
const userDispScore = document.querySelector("#players-score");

const result = document.querySelector("#result")
const collOfImages = document.querySelectorAll(".images>img");

const imageArray = Array.from(collOfImages);


wScore = 0;
lScore = 0;

imageArray.forEach((img)=>{
    img.addEventListener("click" , (e)=>{
        const uMove = e.target.id;
        let generateCRan = Math.floor(Math.random()* 3);
         let cMove;


        if(generateCRan===0 ){
            cMove = 'Rock';
        }else if(generateCRan===1){
            cMove = 'Scissors';
        }else if(generateCRan===2){
            cMove = 'Paper';
        }
        // console.log("cmp-random",generateCRan);
        console.log("User-move",uMove);
        console.log("Computer-Move",cMove);
        compdispMove.innerHTML = cMove;
        userMove.innerHTML = uMove;

        
        if(cMove == "Paper" && uMove== "Scissors"){
            console.log("Congratulations, you won");
             result.innerText = "Congratulations, you won";
        }else if(cMove == "Paper" && uMove == "Rock"){
            result.innerText = "Alas, you lost";
            console.log("Alas, you lost");
        }else if(cMove == "Paper" && uMove == "Paper"){
            console.log("It was a draw");
            result.innerText = "It was a draw";
        }else if(cMove == "Rock" && uMove == "Scissors"){
            console.log("Alas, you lost");
            result.innerText = "Alas, you lost";
        }else if(cMove == "Rock" && uMove == "Rock"){
            console.log("It was a draw");
            result.innerText = "It was a draw";
        }else if(cMove == "Rock" && uMove == "Paper"){
            console.log("Congratulations, you won");
            result.innerText = "Congratulations, you won";
        }else if(cMove == "Scissors" && uMove == "Paper"){
            console.log("Alas, you lost");
            result.innerText = "Alas, you lost";
        }else if(cMove == "Scissors" && uMove == "Scissors"){
            console.log("It was draw");
            result.innerText = "It was a draw";
        }else if(cMove == "Scissors" && uMove == "Rock"){
            console.log("Congratulations, you won"); 
            result.innerText = "Congratulations, you won";
        }  

        if(result.innerText === "Congratulations, you won"){
            wScore++;
        }else if(result.innerText === "Alas, you lost"){
            lScore++;
        }

        userDispScore.innerHTML = wScore;
        compdispScore.innerHTML = lScore;

    })
})


