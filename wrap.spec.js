const {expect}=require('chai')
const mocha=require('mocha')
const wrap=require('./wrap');

describe('wrap', ()=>{
    it('returns a string', ()=>{
        const wrapped=wrap('this is a string for wrap', 7);
        expect(wrapped).to.be.a('string');
    })
    it('inserts linebreaks at appropriate points', ()=>{
        const correctWrap=wrap('this is another test', 4);
        expect(correctWrap).to.equal('this\nis\nanother\ntest')
    })
    it('retains spaces when a line does not break', ()=>{
        const longerWrap=wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)
        expect(longerWrap).to.equal(`Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`);
    })
})