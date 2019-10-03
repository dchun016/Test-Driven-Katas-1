const {expect} = require('chai')

const twoSum = require('./twoSum')

describe('twoSum', () => {
    it('returns an array', () => {
        const summed = twoSum([1, 2, 3, 4, 5])
        expect(summed).to.be.an('array')
    })
    it('returns an empty array if no two array indices add up to sum', () => {
        const invalid = twoSum([1, 3, 7, 9], 500)
        expect(invalid).to.be.empty
    })
    it('returns the indices that add up to the target value', () => {
        const valid = twoSum([1, 2, 4, 6, 8], 14)
        expect(valid).to.be.an('array').that.does.include(3)
        expect(valid).to.be.an('array').that.does.include(4)
        expect(valid.length).to.equal(2)
    })
    it('ensures no element is used twice', () => {
        const invalid = twoSum([1, 2, 4, 7, 9], 14)
        expect(invalid).to.be.empty
    })
})
