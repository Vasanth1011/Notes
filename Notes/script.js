const notescontainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let nptes=document.querySelectorAll(".input-box");
var toggle=document.getElementById("toggle");



function shownotes(){
  notescontainer.innerHTML=localStorage.getItem("notes");
}
shownotes();

function updatestorage(){
  localStorage.setItem("notes",notescontainer.innerHTML);
}

createbtn.addEventListener("click",()=>{
  let inputbox=document.createElement("p");
  let img=document.createElement("img");
  inputbox.className="input-box";
  inputbox.setAttribute("contenteditable","true");
  img.src="notes-app-img/images/delete.png";
  notescontainer.appendChild(inputbox).appendChild(img);
});

notescontainer.addEventListener("click",function(e){
  if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    updatestorage();
  }
  else if(e.target.tagName==="P")
  {
    notes=document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup=function(){
        updatestorage();
      }
    });
  }
});

document.addEventListener("keydown",event=>{
  if(event.key==="Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})

document.addEventListener("click",()=>{
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    toggle.src="dark theme icon/dark theme icon/sun.png";
  }
  else{
    toggle.src="dark theme icon/dark theme icon/moon.png";
  }
})