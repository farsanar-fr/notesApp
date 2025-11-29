//Add Note
document.querySelector(".add").addEventListener("click", function () {
    document.querySelector('.help').classList.add("hide");
  document.querySelector(".newNote").classList.add("show");
  document.querySelector(".newNote").classList.remove("hide");
  document.querySelector(".overlay").classList.add("show");
  document.querySelector(".overlay").classList.remove("hide");
  let newNote = document.querySelector(".newNote");
  const boldBtn = newNote.querySelector(".fa-bold");
  console.log(boldBtn);

  boldBtn.addEventListener("click", (e) => {
    console.log("bold");

    e.preventDefault(); // prevent button from taking focus
    document.execCommand("bold"); // now works
  });
  const emBtn = newNote.querySelector(".fa-italic");

  emBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent button from taking focus
    document.execCommand("italic"); // now works
  });
  const underLineBtn = newNote.querySelector(".fa-underline");

  underLineBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent button from taking focus
    document.execCommand("underline"); // now works
  });
  const strikeBtn = newNote.querySelector(".fa-strikethrough");
  console.log(boldBtn);

  strikeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent button from taking focus
    document.execCommand("strikethrough"); // now works
  });
});

//Save
document.querySelector(".save").addEventListener("click", function () {
  let title = document.querySelector(".title").innerHTML;
  let notes = document.querySelector(".notes").innerHTML;

  document.querySelector(".newNote").classList.remove("show");
  document.querySelector(".newNote").classList.add("hide");

  console.log(title, notes);
  attachNote(title, notes);
  resetValues();
  document.querySelector(".overlay").classList.add("hide");
  document.querySelector(".overlay").classList.remove("show");
});

function attachNote(title, notes) {
    
  console.log("ATTACH NOTE");

  let note = document.createElement("div");

  note.classList.add("note");

 // note.innerHTML = `<h2>${title}</h2><p>${notes}</p>`;
    note.innerHTML = `
        <div class="title">${title}</div>
        <div class="notes">${notes}</div>
    `;
    let titleElem = note.querySelector(".title");
  let notesElem = note.querySelector(".notes");
  let bgClr = `hsl(${Math.random() * 360},70%,80%)`;
  titleElem.style.backgroundColor=bgClr;
  notesElem.style.backgroundColor=bgClr;
  document.body.appendChild(note);

  //editNote();
  //     document.querySelectorAll('.note').forEach(function(note){
  // console.log(note);

  // note.addEventListener('click',function(e){
  //     console.log(e.target);

  // });

  // });
}

document.body.addEventListener("click", function (e) {
  const note = e.target.closest(".note");
  if (!note) return;

  // Prevent multiple edit popups
  if (document.querySelector(".editNote")) return;
  console.log(note);
  editNote(note);
});
function editNote(note) {
  console.log("EDIT NOTE=====================", note);

  // document.querySelectorAll('.note').forEach(function(note) {

  //     note.addEventListener('click', function(e) {

  let editNote = document.createElement("div");
  editNote.classList.add("editNote", "show", "container");

  let titleText = note.querySelector(".title").innerHTML;
  let notesText = note.querySelector(".notes").innerHTML;

  editNote.innerHTML = `
                <button class="saveEdit btn"><i class="fa-solid fa-floppy-disk"></i></button>
                <div class="editTitle container mt-2 fs-5" contenteditable="true">${titleText}</div>
                <div class="editNotes container mt-2" contenteditable="true">${notesText}</div>
                <button class="fa-bold"><i class="fa-solid fa-bold "></i></button>
<button class="fa-italic"><i class="fa-solid fa-italic ms-2"></i></button>
<button class="fa-underline"><i class="fa-solid fa-underline ms-2"></i></button>
<button class="fa-strikethrough"><i class="fa-solid fa-strikethrough ms-2"></i></button>
            `;

  const boldBtn = editNote.querySelector(".fa-bold");
  console.log(boldBtn);

  boldBtn.addEventListener("click", (e) => {
    console.log("bold");

    e.preventDefault(); // prevent button from taking focus
    document.execCommand("bold"); // now works
  });
  const emBtn = editNote.querySelector(".fa-italic");

  emBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent button from taking focus
    document.execCommand("italic"); // now works
  });
  const underLineBtn = editNote.querySelector(".fa-underline");

  underLineBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent button from taking focus
    document.execCommand("underline"); // now works
  });
  const strikeBtn = editNote.querySelector(".fa-strikethrough");

  strikeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent button from taking focus
    document.execCommand("strikethrough"); // now works
  });

  document.body.appendChild(editNote);

  document.querySelector(".overlay").classList.add("show");
  document.querySelector(".overlay").classList.remove("hide");

  // save edited note
  editNote.querySelector(".saveEdit").addEventListener("click", function (e) {
    let editTitle = editNote.querySelector(".editTitle").innerHTML;
    let editNotes = editNote.querySelector(".editNotes").innerHTML;

    // Update note content
    console.log(editTitle);
    console.log(editNotes);
    console.log(note);

    updateNote(editTitle, editNotes, note);
    console.log("UPDATED");

    // Hide this popup (not the first one)
    editNote.classList.remove("show");
    editNote.classList.add("hide");

    // hide overlay
    document.querySelector(".overlay").classList.add("hide");
    document.querySelector(".overlay").classList.remove("show");

    // DELETE this popup
    //document.querySelector('.editNote').remove();
    setTimeout(() => {
      editNote.remove();
      console.log("REMOVED");
    }, 200);
  });

  //     });

  // });
}
function updateNote(title, notes, note) {
  console.log("UPDATE NOTE");
  console.log(title);
  console.log(notes);
  console.log(note);
   note.innerHTML = `
        <div class="title">${title}</div>
        <div class="notes">${notes}</div>
    `;
}
//  $('.note').click(function(el){
//             console.log(el.currentTarget);
//             let editNote=document.createElement('div');

//         });
function resetValues() {
  document.querySelector(".title").value = "";
  document.querySelector(".notes").value = "";
}
