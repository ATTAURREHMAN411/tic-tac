
let boxes = document.querySelectorAll(".box")
let restbtn = document.querySelector("#reset-btn")
let newbtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


let turn = true;
let winner = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

let restgame = () => {
 turn = true;
 enable();
 msgContainer.classList.add("hedin")
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turn){
      box.innerText = "O"
      turn = false
    }else{
      box.innerText = "X"
      turn = true
    }
    box.disabled = true;
    checkwinner ();
  })
});

const disabled = () => {
  for(let box of boxes){
    box.disabled = true
  }
}

const enable = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = ""
  }
}

const showwinner = (winner) => {
  msg.innerText = `Congraluation, Winner is ${winner}`
  msgContainer.classList.remove("hedin")
  disabled();
}



const checkwinner = () => {
   for(patren of winner){
       let post1 = boxes[patren[0]].innerText;
       let post2 = boxes[patren[1]].innerText;
       let post3 = boxes[patren[2]].innerText;

       if(post1 != "" && post2 != "" && post3 != ""){
        if(post1 === post2 && post2 === post3){
          console.log("WINNER", post1)
          showwinner(post1);
       }
    }
   }
}
newbtn.addEventListener("click", restgame)
restbtn.addEventListener("click", restgame)