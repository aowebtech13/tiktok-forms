let date =new Date();
let year = date.getFullYear();
let month = date.getMonth();

//select DOM elements

const day =document.querySelector(".calendar-dates");
const currdate= document.querySelector (".calendar-current-date");

//month names arrray 

const months = [
    "january", "febuary", "March" , "April", "May", "June", "July" , "August" , "Septemmber" , "October" , "November" , "Decmeber"];

    //variables for clicked day tracking .
    let clickedDay=null;
    let selectedDayElement =null;
// function to check if a day is an holiday 
const isHoliday = (day,month,year) => {
    const holidays = [
        {
            month:0, day :1
        },  //new year day

        {
            month:2 , day:8
        },
        //intenational women day
        {
            month:4 , day:1
        }, //armistice
        {
            month :10, day:1
        },
        //international workers day
        {
            month:12 , day:25,
        },
        //christmas
        {
            month:5 , day:11
        },
        //madraka day 
        {
            month :11 , day :12
        },
        //jamhuri day

    ]

}