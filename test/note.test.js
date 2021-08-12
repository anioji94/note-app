const Note = require('../src/note')
const test = new Note('testbook')

describe('Notebook', () => {
    it('should be given a name', () => {
        expect(test.name).toBe('testbook')
    })

    it('should be empty', () => {
        expect(test.pages).toBe(0)
    })

    describe('#addNote', () => {
        console.log('hi')
    })
})