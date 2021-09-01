document.addEventListener("DOMContentLoaded", () => {
    const note = new Note
    const submit = document.querySelector('#submit-note')
    const title = document.querySelector('#note-title')
    const body = document.querySelector('#note-body')
    const noteList = document.getElementById("note-list");

    // addNote
    submit.addEventListener('click', () => {
        event.preventDefault()
        // Read value of title and body
        note.addNote(title.value, body.value)
        clearText()
    })


    // Utility Functions
    function clearText() {
        title.value = ""
        body.value = ""
    }

})

// note-title
// note-body
// submit-note