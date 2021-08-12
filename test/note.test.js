const Note = require('../src/note')
const test = new Note('testbook')

describe('Notebook', () => {
    it('should be given a name', () => {
        expect(test.name).toBe('testbook')
    })

    describe('#addNote', () => {
        console.log('hi')
    })
})