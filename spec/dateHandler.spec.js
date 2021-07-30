const DateHandler = require('../src/dateHandler.js')

describe('Date Tests', () => {
    it('Difference between dates', () =>{
        const date1 = new Date('7/7/2021'); //7th of July
        const date2 = new Date('7/6/2021'); //6th of July
        const DateHandler = new DateHandler(date1, date2); 
        expect(DateHandler.difference()).toEqual(1);
    })
    it('Same Date', () => {
        const date1 = new date('12/25/2018'); //Christmas
        const date2 = new date('12/25/2018'); //Christmas Again
        const DateHandler = new DateHandler(date1, date2); 
        expect(DateHandler.difference()).toEqual(0);
    })
    it('Opposite Order', () => {
        const date1 = new Date('7/6/2021'); //6th of July
        const date2 = new Date('7/7/2021'); //7th of July
        const DateHandler = new DateHandler(date1, date2); 
        expect(DateHandler.difference()).toEqual(1);
    })
}) 