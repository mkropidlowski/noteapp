const addNote = document.querySelector('.addNote');
const textareaNote = document.querySelector('.textareaNote');
const noteBox = document.querySelector('.noteBox');
const deleteNote = document.querySelector('.deleteNote');
const notesContainer = document.querySelector('.notesContainer');
const addForm = document.querySelector('.add');



addNote.addEventListener('click', e => {

    const noteText = addForm.textNote.value;

    const div = document.createElement('div');
    div.className = 'noteBox';

    const divv = document.createElement('div');
    divv.className = 'icons';
   
    const img = document.createElement('img');
    img.setAttribute('src', 'img/garbage.png');
    img.className = 'deleteNote';

    divv.appendChild(img);

    const textA = document.createElement('textarea');
    textA.classList = 'textareaNote';
    textA.appendChild(document.createTextNode(noteText));
    
    div.appendChild(divv);
    div.appendChild(textA);
    
    
    notesContainer.appendChild(div);


    addTask(noteText);
    addForm.textNote.value = '';

    e.preventDefault();

});

document.addEventListener('DOMContentLoaded', () => {
let storage;
if(localStorage.getItem('notes') === null){
    storage = [];
} else {
    storage = JSON.parse(localStorage.getItem('notes'));
}

storage.forEach((note) => {
    

    const div = document.createElement('div');
    div.className = 'noteBox';

    const divv = document.createElement('div');
    divv.className = 'icons';
   
    const img = document.createElement('img');
    img.setAttribute('src', 'img/garbage.png');
    img.className = 'deleteNote';

    divv.appendChild(img);

    const textA = document.createElement('textarea');
    textA.classList = 'textareaNote';
    textA.appendChild(document.createTextNode(note));

    div.appendChild(divv);
    div.appendChild(textA);
    
    
    notesContainer.appendChild(div);
    
   
 });
 
});




// add task
function addTask(task){
    let storage;
    if(localStorage.getItem('notes') === null){
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('notes'));
    }
    storage.push(task);

    localStorage.setItem('notes', JSON.stringify(storage));
}

// remove from ls


notesContainer.addEventListener('click', e => {

    if(e.target.classList.contains('deleteNote')){
        e.target.parentElement.parentElement.remove();
        removeFromLs(e.target.parentElement.parentElement);
        console.log(e.target.parentElement.parentElement);
        
        
    }

});

function removeFromLs(removedNotes){
    let storage;
    if(localStorage.getItem('notes') === null){
        storage = [];
    } else {
        storage = JSON.parse(localStorage.getItem('notes'));
    }
    
    storage.forEach((notes, index) =>{
        
        if(removedNotes.textContent === notes){
            storage.splice(index, 1);
            
        } 
    });
    localStorage.setItem('notes', JSON.stringify(storage));
}







