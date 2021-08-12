const Note = require('../src/note')

describe('Notebook', () => {
    it('should be given a name', () => {
        let test = new Note('testbook')
        expect(test.name).toBe('testbook')
    })

//     describe('#test', () => {
//         let test = new note.Note('')
//     })
})