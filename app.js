const addNote = document.querySelector('.addNote');
//const titleNote = document.querySelector('.titleNote');
//const textareaNote = document.querySelector('.textareaNote');
const noteBox = document.querySelector('.noteBox');
//const applyNote = document.querySelector('.applyNote');
// const deleteNote = document.querySelector('.deleteNote');
const notesContainer = document.querySelector('.notesContainer');
const addForm = document.querySelector('.add');



addNote.addEventListener('click', e => {
    e.preventDefault();

   const noteText = addForm.textNote.value;
   
   if(noteText.length){
       console.log(noteText);
      generateNotes(noteText);
        addForm.reset();
   }

});


    
 const generateNotes = noteText => {
       
    const noteHTML = `
    <div class="noteBox">
         <div class="icons">
             <img src="img/garbage.png" class="deleteNote">
             <img src="img/confirm.png" class="applyNote">
                   
         </div>
     <textarea class="textareaNote" name="textNote" placeholder="Type here...">${noteText}</textarea>
    </div>  
    `;

    notesContainer.innerHTML += noteHTML; 
 }


























// addNote.addEventListener('click', e => {
//     e.preventDefault();
  //  const note = textareaNote.value;
    // generateNotes(note);
    
    // const textArea = textareaNote.value;
    // arrDesc.push(textArea);
             
    // generateNotes(arrDesc);    
    //console.log(arrDesc);

   // });
     // napisać funkcje w której będzie tylko szkic, a potem przez listenera po kliknięciu dodać te funkcję z parametrem
    
//  const generateNotes = noteText => {
       
//         const noteHTML = `
//         <div class="noteBox">
//         <div class="icons">
//             <img src="img/garbage.png" class="deleteNote">
//             <img src="img/confirm.png" class="applyNote">
            
//         </div>
       
//          <textarea class="textareaNote" placeholder="Type here...">${noteText}</textarea>
            
//             </div>
//         `;

//         notesContainer.innerHTML += noteHTML; 
//  }
        
       
//         addForm.addEventListener('click', e => {
//              e.preventDefault();

//             const noteText = addForm.textareaNote.value;
//             console.log(noteText);
//             generateNotes(noteText);
//              addForm.reset();
        
                
//     });
        











// const generateNotes = note => {
    
//     const noteHTML = `
//     <div class="noteBox">
//     <div class="icons">
//         <img src="img/garbage.png" class="deleteNote">
//         <img src="img/confirm.png" class="applyNote">
        
//     </div>
    
//         <input type="text" class="textareaNote" placeholder="Type here...">${note}     
//     </div>
//     `;

//     notesContainer.innerHTML += noteHTML;  

// };

// applyNote.addEventListener('click', () =>{
   
//     const note = textareaNote.add.value;
//     if(note.length) {
//         generateNotes(note);
//         console.log(note);
//     }
// });


    
//notesContainer.forEach(del => {     
    //console.log(del);
    // del.addEventListener('click', e => {
    //     if(e.target.classList.contains('deleteNote')){
    //         console.log(true);
    //     } else {
    //         console.log(false);
    //     }

    //  });
//});


    // applyNote.addEventListener('click', () => {

    //     const arrDesc = [];
    //     const title = titleNote.value;
    //     const textArea = textareaNote.value;

    //     arrDesc.push(title,textArea);
             
    //     console.log(arrDesc);    
    
    // });
 
