let btn=document.querySelector("#btn");
let text=document.querySelector("#text");
let ulTag=document.querySelector("#ulTag");

//Mathod
btn.addEventListener("click",function(e){
    e.preventDefault();
    //creating li tag
    let liTag=document.createElement("li");
    liTag.innerText=text.value;
    ulTag.appendChild(liTag);
    // creating delete button
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("deletBtn");
    liTag.appendChild(delBtn);
    text.value="";
});

//task remove
ulTag.addEventListener("click",function(e){
    e.preventDefault();
    let btnParent=e.target.parentElement;
    if(e.target.nodeName=="BUTTON"){
        btnParent.remove();
    }
})