// const mocha = require('mocha');
const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe('longestCommonPrefix', () => {
  it('returns a string', () => {
    expect(longestCommonPrefix([])).to.be.a('string');
  });
});
