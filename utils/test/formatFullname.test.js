const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

    it('should return an error if ""fullName" is empty', () => {
        expect(formatFullname('')).to.equal('Error');
        expect(formatFullname('', 'abc')).to.equal('Error');
    });
    it('should work fine if args are correct regardles of random capital letters in "fullName"', () => {
        expect(formatFullname('John Doe')).to.equal('John Doe');
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('JOHN DoE')).to.equal('John Doe');
    });
    it('should return an error if "fullName" in not string', () => {
        expect(formatFullname(20)).to.equal('Error');
        expect(formatFullname(true)).to.equal('Error');
        expect(formatFullname('undefind')).to.equal('Error');
        expect(formatFullname(NaN)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname(function () {})).to.equal('Error');
    });
    it('should return an error if "fullName" is not equal "firstName" and "lastName"', () => {
        expect(formatFullname('Lorem ', 'Ip', 'sum')).to.equal('Error');
        expect(formatFullname('LoremIpsum')).to.equal('Error');
        expect(formatFullname('LoremIpsum', 'hghg')).to.equal('Error');
        expect(formatFullname('Lore mIp sum')).to.equal('Error');
    });
    it('should return an error if "firstName" and "lastName" is to short', () => {
        expect(formatFullname('e')).to.equal('Error');
        expect(formatFullname('f d')).to.equal('Error');
        expect(formatFullname('Ed p')).to.equal('Error');
    });
});