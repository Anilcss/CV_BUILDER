import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare var google: any;
@Component({
  selector: 'app-salesdashboard',
  templateUrl: './salesdashboard.component.html',
  styleUrls: ['./salesdashboard.component.css'],
 
})
export class SalesdashboardComponent implements AfterViewInit  {
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
      ['Sales', 40],
      ['Production', 20],
      ['Incoming', 20],
      ['Outgoing', 20],
      // ['Commute', 2],
      // ['Watch TV', 2],
      // ['Sleep', 7]
    ]);

    const options = {
      title: 'Sales Overview',
      width: 400,
      height: 400,
      colors: ['#109618','#FF0000','#ff9900','#7C007C'] ,
    
      backgroundColor: 'transparent' 
    };

    const chart = new google.visualization.PieChart(this.el.nativeElement.querySelector('#piechart'));
    chart.draw(data, options);
  }
}
