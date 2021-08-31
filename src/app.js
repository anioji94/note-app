document.addEventListener("DOMContentLoaded", () => {
    const note = new Note
    const submit = document.querySelector('#submit-note')
    const title = document.querySelector('#note-title')
    const body = document.querySelector('#note-body')

    // addNote
    submit.addEventListener('click', () => {
        event.preventDefault()
        // Read innerText of title and body
        note.addNote(title.textContent, body.textContent)
        console.log('w')
    })
})

// note-title
// note-body
// submit-note