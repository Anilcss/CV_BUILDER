import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { FullLayoutComponent } from './_layouts/full/full.component';
import { BlankLayoutComponent } from './_layouts/blank/blank.component';
import { AppBreadcrumbComponent } from './_components/breadcrumb/breadcrumb.component';
import { VerticalAppSidebarComponent } from './_components/vertical-sidebar/vertical-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './_components/spinner/spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { MenuItems } from './_models/menu-items';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './_directives/accordion';
import { OnlyNumericDirective } from './_directives/only-numeric/only-numeric.directive';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const DateFormats = {
  parse: {
    dateInput: ['DD/MM/YYYY']
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD/MM/YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DD/MM/YYYY'
  },
};

@NgModule({
  declarations: [
    FullLayoutComponent,
    BlankLayoutComponent,
    AppBreadcrumbComponent,
    VerticalAppSidebarComponent,
    SpinnerComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    OnlyNumericDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MaterialModule,

    PerfectScrollbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    FlexLayoutModule,

    FullLayoutComponent,
    BlankLayoutComponent,
    MaterialModule,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    OnlyNumericDirective,

    PerfectScrollbarModule,
    TranslateModule
  ],
  providers: [
    MenuItems,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: DateFormats
    }
  ]
})
export class SharedModule { }
