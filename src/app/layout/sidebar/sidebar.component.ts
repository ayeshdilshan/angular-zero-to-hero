import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ROUTES } from './sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public sidebarItems: any[] | undefined;
  public innerHeight: any;
  public bodyTag: any;
  listMaxHeight: string | undefined;
  listMaxWidth: string | undefined;
  userFullName: string | undefined;
  userImg: string | undefined;
  userType: string | undefined;
  headerHeight = 60;
  routerObj: any;
  currentRoute: string | undefined;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    // private authService: AuthService,
    private router: Router
  ) {
    this.routerObj = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // close sidebar on mobile screen after menu select
        this.renderer.removeClass(this.document.body, 'overlay-open');
        this.sidebbarClose();
      }
    });
  }
  @HostListener('window:resize', ['$event'])
  windowResizecall(event: any) {
    if (window.innerWidth < 1025) {
      this.renderer.removeClass(this.document.body, 'side-closed');
    }
    this.setMenuHeight();
    this.checkStatuForResize(false);
  }
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: { target: any; }): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.document.body, 'overlay-open');
      this.sidebbarClose();
    }
  }
  callToggleMenu(event: any, length: any) {
    if (length > 0) {
      const parentElement = event.target.closest('li');
      const activeClass = parentElement.classList.contains('active');

      if (activeClass) {
        this.renderer.removeClass(parentElement, 'active');
      } else {
        this.renderer.addClass(parentElement, 'active');
      }
    }
  }
  ngOnInit() {
    // if (this.authService.isLoggedIn()) {
      this.sidebarItems = ROUTES.filter((sidebarItem: any) => sidebarItem);
      
    this.initLeftSidebar();
    this.bodyTag = this.document.body;
  }
  ngOnDestroy() {
    this.routerObj.unsubscribe();
  }
  initLeftSidebar() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    // Set menu height
    _this.setMenuHeight();
    _this.checkStatuForResize(true);

  }
  setMenuHeight() {
    this.innerHeight = window.innerHeight;
    const height = this.innerHeight - this.headerHeight;
    this.listMaxHeight = height + '';
    this.listMaxWidth = '500px';

  }
  isOpen() {
    return this.bodyTag.classList.contains('overlay-open');
  }
  checkStatuForResize(firstTime: boolean) {
    if (window.innerWidth < 1025) {
      this.renderer.addClass(this.document.body, 'sidebar-gone');
    } else {
      this.renderer.removeClass(this.document.body, 'sidebar-gone');
    }
  }
  mouseHover(e: any) {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('submenu-closed')) {
      this.renderer.addClass(this.document.body, 'side-closed-hover');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
    }
  }
  mouseOut(e: any) {
    const body = this.elementRef.nativeElement.closest('body');
    if (body.classList.contains('side-closed-hover')) {
      this.renderer.removeClass(this.document.body, 'side-closed-hover');
      this.renderer.addClass(this.document.body, 'submenu-closed');
    }
  }

  sidebbarClose() {
    if (window.innerWidth < 1025) {
      this.renderer.addClass(this.document.body, 'sidebar-gone');
    }
  }
}
