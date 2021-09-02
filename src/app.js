document.addEventListener("DOMContentLoaded", () => {
    const note = new Note
    const submit = document.querySelector('#submit-note')
    const title = document.querySelector('#note-title')
    const body = document.querySelector('#note-body')
    const noteList = document.getElementById("note-list");

    
    console.log(note)
    // addNote
    submit.addEventListener('click', () => {
        event.preventDefault()
        // Read value of title and body
        note.addNote(title.value, body.value)
        clearText()
        console.log("Title: " + note.pages[0][0] + "\n Note: " + note.pages[0][1] )
        console.log(note.pages.length)
        showNotes()
    })

    function showNotes() {
        let html = ""
        for (let i = 0; i < note.pages.length; i++) {
            html += `<h3>${note.pages[i][0]}</h3><br><p>${note.pages[i][1]}</p><br>`
        }
        noteList.innerHTML = html
    }

    // Utility Functions
    function clearText() {
        title.value = ""
        body.value = ""
    }

})

// note-title
// note-body
// submit-note