console.log('welcome');
showNotes();

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click" , function(e){
     
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html += `<div class="noteCard my-2 mx-2 bg-light" style="width: 29rem; justify-content: space-between;" style="background-color:white;">
            <div class="card-body "style="word-break: break-word; width: 30rem; ">
              <h4 class="card-title" style="background-color: dimgrey; color:white; font-size: 1.5rem; width: 25rem; height: 2rem; align-content: center; text-align: center;">Note ${index+1}</h4>
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">del</button>
            </div>
        </div> 
    </div> `
    });
    let notesElement=document.getElementById("notes");
    if(notesObj.length!=0){
        notesElement.innerHTML=html;
    }
    else{
        notesElement.innerHTML=`Add your first note`;
    }
}

function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
       
         let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
