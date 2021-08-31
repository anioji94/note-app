const Note = require('../src/note')
const test = new Note('testbook')

describe('Notebook', () => {
    it('should be given a name', () => {
        expect(test.name).toBe('testbook')
    })

    it('should be empty', () => {
        expect(test.pages.length).toBe(0)
    })

    describe('#addNote', () => {
        it('should add a note to a new page', () => {
            test.addNote('Test Note', 'Hi, this is a test note')
            expect(test.pages.length).toBe(1)
        })
    })

    describe('#readNote', () => {
        it('should allow users to read each note', () => {
            expect(test.readNote('Test Note')).toBe('Hi, this is a test note')
        })
    })

    describe('#updateNote', () => {
        it('should allow users to update existing notes', () => {
            test.updateNote('Test Note', 'Hi, this is an edited test note')
            expect(test.readNote('Test Note')).toBe('Hi, this an edited test note')
        })
    })

    describe('#deleteNote', () => {
        it('should delete a note from the title', () => {
            test.deleteNote('Test Note')
            expect(test.pages.length).toBe(0)
        })
    })
})