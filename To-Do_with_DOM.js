let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    // let item = document.querySelector("li");//This will just replace the elements inside <ul> not add.

    let item = document.createElement("li");
    let delBtn = document.createElement("button");

    item.innerText = inp.value;
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.append(item);

    // console.log("Clicked !");
    // console.log(inp.value);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");

// for(del of delBtns){
//     del.addEventListener("click", function(){
//         // console.log("Elements deleted.");

//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }//This event listeners are not applied to newly created elements.


ul.addEventListener("click", function(e){
    console.log(e.target);
    console.dir(e.target.nodeName);
    console.log("Button clicked.");

    if(e.target.nodeName == "BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    } else{
        console.log("Don't delete");
    }

    console.log("----------------");
});