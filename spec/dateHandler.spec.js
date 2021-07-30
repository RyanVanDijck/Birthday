const DateHandler = require('../src/dateHandler.js')

describe('Date Tests', () => {
    it('Difference between dates', () =>{
        const date = new Date('7/6/2021'); //6th of July
        const dateHandler = new DateHandler(6, 7); 
        expect(dateHandler.difference()).toEqual(24);
    })
    it('Same Date', () => {
        const dateHandler = new DateHandler(new Date().getDate(), new Date().getMonth()+1); 
        expect(dateHandler.difference()).toEqual(0);
    })
}) 
// 
// var today = new Date();
// var dd = today.getDate();

// var mm = today.getMonth()+1; 
// var yyyy = today.getFullYear();
// if(dd<10) 
// {
//     dd='0'+dd;
// } 

// if(mm<10) 
// {
//     mm='0'+mm;
// } today = mm+'-'+dd+'-'+yyyy;