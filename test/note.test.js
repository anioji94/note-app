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
})