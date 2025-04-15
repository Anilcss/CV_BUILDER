
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AppRoutingModule } from './app.routing';
import { MenuItems } from './shared/menu-items/menu-items';



@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
   MaterialModule

  ],
  providers: [
  { provide: LocationStrategy, useClass: HashLocationStrategy },

    MenuItems,
    {
      
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
