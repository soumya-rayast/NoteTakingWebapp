const addbtn = document.querySelector("#addbtn"); //for add button
const main =document.querySelector(".container") //for main container box
// created function for click add notes 
addbtn.addEventListener("click",function(){
    addnote()
});
//function for saving notes
const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    console.log(notes)
    notes.forEach(
        (note) =>{
            data.push(note.value)
        }
    )
    if(data.length ===0)
    {
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
    localStorage.setItem("notes",JSON.stringify(data));
}
//function for add note to the container
const addnote = (text ="") =>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = 
    `<div class="tool">
    <i class=" save fa-solid fa-floppy-disk"></i>
    <i class=" trash fa-solid fa-trash"></i>
    </div>
    <textarea>${text}</textarea>`;

    //funtion for deleting note
    note.querySelector(".trash").addEventListener("click" ,function(){
        // alert("You will loss your Data.");
        // note.remove();
        // saveNotes();
        const response = confirm("Are you sure!, You will loss your Notes");
        if(response){
            alert("You deleted your notes!")
            note.remove();
            saveNotes();
        }
        else{
            alert("You changed your opinion :) ")
        }

    })
    //function for save  notes
    note.querySelector(".save").addEventListener("click",function(){
        saveNotes();
    })
    //function for focusout from text area
    note.querySelector("textarea").addEventListener("focusout",function(){
        saveNotes();
    })
    main.appendChild(note);
    saveNotes()
    
}
// function for saving and shown the data from local storage 
(
    function() {
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    if(lsnotes === null){
        addnote()
    }else{
        lsnotes.forEach(
            (lsnotes) => {
                addnote(lsnotes)
            }
        )
    }
    }
)()