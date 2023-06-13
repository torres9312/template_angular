import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SidebarOpenService } from '../../../shared/services/sidebar-open.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  collapsed : boolean = false;
  dropdownActive: any = false;
  username : any ;

  innerWidth?: number;
  navColor : boolean = false;
  isAdmin = false;

  constructor(
    private collapsedService : SidebarOpenService,
    private router : Router,
    public authService : AuthService
  ) { 
    
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
    this.innerWidth = window.innerWidth;   
  }


  ngOnInit(): void {
    if(window.innerWidth <= 856){
      this.collapsed = true;
      this.collapsedService.collapseMenu(this.collapsed);
    }
    this.collapsedService.getEmittedValue()
    .subscribe((value:any) => this.collapsed = value);

  }

  closeMenu(event : any){
    event.target.parentElement.classList.remove('show');
  }

  collapseMenu(){
    this.collapsed = !this.collapsed;
    this.collapsedService.collapseMenu(this.collapsed);
  }

  openMenu(event : any){
    let elements = document.querySelectorAll('.dropdown-content');
    let elementCurrent = event.target.offsetParent?.querySelector('.dropdown-content');

    elements.forEach((element: any) => {
      if(element === elementCurrent){
        if(element.classList.contains("show")){
          element.classList.remove('show');
        }else{
          element.classList.add('show');
        }
      }else{
        element.classList.remove('show');
      }
    });

    

    

  }

  logout(){

    this.authService.logout();
    
  }
/* 
  @HostListener('window:scroll', ['$event']) 
  onScroll(event: any) {
    if(window.pageYOffset >= 5){
        if(!this.navColor){
          this.navColor = true;
        }
    }

    if(window.pageYOffset < 5){
      if(this.navColor){
        this.navColor = false;
      }
  }

  } */

}
