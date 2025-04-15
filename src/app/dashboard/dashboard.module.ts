import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

import { SalesdashboardComponent } from './salesdashboard/salesdashboard.component';
import { ColumnbarchartComponent } from './columnbarchart/columnbarchart.component';
import { ProductiondashboardComponent } from './productiondashboard/productiondashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
   DashboardRoutingModule
  ],
  declarations: [DashboardComponent, SalesdashboardComponent, ColumnbarchartComponent, ProductiondashboardComponent, CustomerdashboardComponent]
})
export class DashboardModule {}
