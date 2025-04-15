import { Component, ElementRef, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent {

  constructor(private el: ElementRef) {}
   
     ngAfterViewInit(): void {
       google.charts.load('current', { packages: ['corechart'] });
   
       google.charts.setOnLoadCallback(() => {
         setTimeout(() => this.drawChart(), 100);
       });
     }
   
     drawChart(): void {
       const data = google.visualization.arrayToDataTable([
         ['Overview', 'Hours per Day',],
         ['Sales', 25],
         ['Production', 25],
         ['Incoming', 30],
         ['Outgoing', 20],
         // ['Commute', 2],
         // ['Watch TV', 2],
         // ['Sleep', 7]
       ]);
   
       const options = {
         title: 'Customer Overview',
         width: 400,
         height: 400,
         colors: ['#109618','#FF0000','#ff9900','#7C007C'] ,
       
         backgroundColor: 'transparent' 
       };
   
       const chart = new google.visualization.PieChart(this.el.nativeElement.querySelector('#piechart'));
       chart.draw(data, options);
     }
 

}
