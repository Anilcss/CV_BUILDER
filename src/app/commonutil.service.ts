import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonutilService {

  selectedDate:any;
  returndate:any;

  constructor() { }

   getCurrentDate() {
    var dateInIST = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    console.log(dateInIST); // Current date and time in IST
  //  var tmp[]= dateInIST.toString().split(',');
  var dateArray = dateInIST.split(',');
    var formatdate= dateArray[0].replace(/\//g, '-');
    
    
    return formatdate.split('-').reverse().join('-');
}
onDateChange(event: any): String {
  let selected = event.value;
  this.selectedDate = new Date(selected.getTime() + 5.5 * 60 * 60 * 1000);
  console.log("Selected Date in IST:", this.selectedDate);
   this.returndate=this.formatDateToYYYYMMDD(this.selectedDate);
  console.log(this.returndate);
  return this.returndate;
  
}

 formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const day = date.getDate().toString().padStart(2, '0'); 
  return `${year}-${month}-${day}`;
}

// console.log(getCurrentDate()); // Call the function and log the formatted date

}
