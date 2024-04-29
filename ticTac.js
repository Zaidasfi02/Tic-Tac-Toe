let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".container-msg");
let msg=document.querySelector("#msg");
 
let turnO=true;
let count=0;
const winPatterns=[
          [0,1,2],
          [0,3,6],
          [0,4,8],
          [1,4,7],
          [2,5,8],
          [2,4,6],
          [3,4,5],
          [6,7,8]
];
boxes.forEach((box)=>{
          box.addEventListener("click",()=>{
                    if(turnO)
                    {
                              box.innerText="O";
                              turnO=false;
                              box.style.color="red";
                    }else{
                              box.innerText="X";
                              box.style.color="black";
                              turnO=true;
                    
                    }
                    box.disabled=true;
                    count ++;
                   let isWinner= checkWinner();

                   if (count === 9 && !isWinner) {
                     draw();
                   }
          });

});

const checkWinner=()=>{
          for(let pattern of winPatterns)
          {
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

            if(pos1Val!=""&&pos2Val!=""&&pos3Val!="")
            {
                    if(pos1Val===pos2Val&&pos2Val===pos3Val)
                    {
                              showWinner(pos1Val);
                              return true;
                    } 
          }
                    
            
          }

};
const draw=()=>
{
          msg.innerText=`Match is Draw`;
          msgContainer.classList.remove("hide");
          disabledBoxes();
};

const showWinner=(winner)=>
          {
             msg.innerText=`Congratulations ,Winner is ${winner}`;
             msgContainer.classList.remove("hide");
             disabledBoxes();
                   };

                   const disabledBoxes=()=>
                   {
                      for(let box of boxes)
                      {
                              box.disabled=true;
                      }
                   };


const resetGame=()=>
{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
const enableBoxes=()=>
{
   for(let box of boxes)
   {
           box.disabled=false;
           box.innerText="";
   }
};
reset.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);