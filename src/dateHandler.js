class DateHandler{
    constructor(day,month){
        this.date = new Date(`${month}/${day}/2021`)
    }
    difference(){
        let difference = Math.abs(new Date() - this.date)
        difference = Math.ceil(difference/ (1000 * 60 * 60 * 24))
        return difference - 1
    }
}

module.exports = DateHandler