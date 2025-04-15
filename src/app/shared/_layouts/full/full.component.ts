import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Route, Router } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Urls } from '../../_models/urls';
import { UseraccessService } from '../../_services/user/useraccess.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullLayoutComponent implements OnDestroy {
viewProfile() {

}

  mobileQuery: MediaQueryList;

  sidebarOpened = false;
  status = false;

  public showSearch = false;
  public config: PerfectScrollbarConfigInterface = {};
  private _mobileQueryListener: () => void;

  constructor(
    public router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private userservice:UseraccessService,
    private route:Router
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 1100px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }
  accessToken = localStorage.getItem('ACCESS_TOKEN');

  headers_object = new HttpHeaders()
    .set('Authorization', "Bearer " + this.accessToken)

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  username: any;
  ngOnInit() {
    this.username = localStorage.getItem('USERNAME')
  }

  
}
