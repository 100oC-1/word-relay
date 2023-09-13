const selectNumber = document.getElementById("selectNumber");
const selectBtn= document.getElementById("selectBtn");
const startClick=document.getElementById("startClick");
const modal=document.getElementById("modal");
const click=document.getElementById("click");
let order=1;

const participantNumber = document.createElement('div');
participantNumber.classList.add('part');
participantNumber.textContent=`${order}번째 참가자`;
const suggested=document.createElement('div');
suggested.textContent="제시어:";
suggested.classList.add('suggest');
const suggestedWord=document.createElement('div');
suggestedWord.textContent='';
const suggestWrapper=document.createElement('div');
suggestWrapper.classList.add('suggestWrapper')
suggestedWord.classList.add('suggested-word');
const wordINput=document.createElement('input');
wordINput.classList.add('wordInput');
const wordBtn=document.createElement('button');
wordBtn.textContent="제출"
let restart=document.createElement('div')
restart.textContent='다시시작';
let lastWord=[];
let currentWord=[];
//제시어 제시
const putSuggestedWord = (Input)=>{
  suggestedWord.textContent=Input.value
}
//실패화면 띄워주는 함수
const failed = ()=>{
  startClick.textContent="실패!";
  startClick.appendChild(restart);
}
//단어저장
const wordSave=()=>{
  lastWord=Array.from(wordINput.value)
}
const numberLoop = ()=>{ 
  let number=selectNumber.value;
  if (Array.from(wordINput.value).length!==3||
  (lastWord.at(-1)==currentWord[0]&&lastWord.length!==0)){
    failed();
  }else{
    wordSave();
    if(order<number){
      order++;
    }else{
      order=1;
    }
    participantNumber.textContent=`${order}번째 참가자`;
    putSuggestedWord(wordINput);
    wordINput.value="";
  }
}

//게임 시작세팅
const gameSet = () =>{
  
  modal.style.display='none'
  startClick.textContent=``
  startClick.appendChild(suggestWrapper)
  suggestWrapper.appendChild(suggested);
  suggestWrapper.appendChild(suggestedWord);
  startClick.appendChild(wordINput);
  // startClick.appendChild(wordBtn);
  startClick.prepend(participantNumber);
};//
//리셋함수
const reset=()=>{
  order=1;
  lastWord=[];
  currentWord=[];
  suggestedWord.textContent="";
  wordINput.value=""
  wordINput.textContent="";
  participantNumber.textContent=`${order}번째 참가자`;

}
const EnterKey=(e)=>{
  if(e.code==="Enter"){
    numberLoop();
  }
}//엔터키 누르면 numberLoop 실행

click.addEventListener("click",()=>{
  modal.style.display='flex';
})
selectBtn.addEventListener("click",gameSet); //몇명할지 정하고 클릭
wordINput.addEventListener("keypress",(e)=>{
  EnterKey(e)
});//엔터키누르면 넘어가게
wordBtn.addEventListener("click",numberLoop);
restart.addEventListener("click", reset);
restart.addEventListener("click", gameSet);


