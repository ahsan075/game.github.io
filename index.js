const msg=document.querySelector(".msg");
const guess=document.querySelector("input");
const btn=document.querySelector(".btn");
let play=false;
let Words=['php','phython','css','java','javascript','android','c++','html'];
let newWords="";
let newRandom="";


const createWords=()=>{
    let random=Math.floor(Math.random()*Words.length)
    let randomWords=Words[random]
    // console.log(randomWords) 
    return randomWords;
}

const Scramble=(array)=>{
    for(let i=array.length-1; i>0; i-- ){
        let temp=array[i];
        let j =Math.floor(Math.random()*(i+1))
        array[i]=array[j]
        array[j]=temp
        console.log(temp)
    }
    return array;
}

btn.addEventListener("click",function(){
    if(!play){
        play=true;
        btn.innerHTML="Guess";
        guess.classList.toggle("hidden")
        newWords=createWords();
        newRandom=Scramble(newWords.split("")).join("")
        console.log(newRandom);
        msg.innerHTML=`Guess the word: ${newRandom}`
    }else{
        let tempWord=guess.value;
        if (tempWord==newWords){
            play=false;
            msg.innerHTML=`Awesome. ${newWords} It's Correct`
            btn.innerHTML="Start Again";
            guess.classList.toggle("hidden");
            guess.value="";
        }else{
            msg.innerHTML=`Sorry Bro.It's Incorrect.Plz try again ${newRandom}`
            guess.value=""
        }
    }
})