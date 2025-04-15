import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy {
  public config: PerfectScrollbarConfigInterface = {};
  mobileQuery: MediaQueryList;

  @Input() showClass: boolean = false;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>()

  private _mobileQueryListener: () => void;
  status = true;
  showMenu = '';
  itemSelect: number[] = [];
  parentIndex = 0;
  childIndex = 0;

  addExpandClass(element: string): void {
    console.log(element);  // Log current state
    console.log('Before Toggle:', this.showMenu);  // Log current state
    this.showMenu = this.showMenu === element ? '' : element;
    
    console.log('After Toggle:', this.showMenu);  // Log updated state
  }

  subclickEvent(): void {
    this.status = true;
  }
  scrollToTop(): void {
    document.querySelector('.page-wrapper')?.scroll({
      top: 0,
      left: 0
    });
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  handleNotify(event: MouseEvent) {
    console.log(event);
    
    event.stopPropagation(); // Prevent click event from bubbling up
    if (window.innerWidth < 1024) {
      this.notify.emit(!this.showClass);
    }
  }
}
