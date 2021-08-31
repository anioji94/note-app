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
    readNote(title) {
        for (let i = 0; i < this.pages.length; i++) {
            if(this.pages[i][0] === title) {
                return this.pages[i][1]
            }
        }
    }

// update note
    updateNote(title, edit) {
        for (let i = 0; i < this.pages.length; i++) {
            if(this.pages[i][0] === title) {
                this.pages[i][1] = edit.toString()
            }
        }
    }

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