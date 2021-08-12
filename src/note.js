class Note {
// constructor
    constructor(name = "My Notebook") {
        this.name = name.toString()
        this.pages = []
    }
// add note
    addNote(title, body) {
        this.pages.push([title, body])
    }
// read note

// update note

// delete note

}

module.exports = Note