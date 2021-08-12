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
    deleteNote(title) {
        for (let i = 0; i < this.pages.length; i++) {
            if(this.pages[i][0] === title) {
                this.pages = this.pages.splice(i, i)
            }
        }
    }
}

module.exports = Note