import { Component, HostListener, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SidebarOpenService} from 'src/app/shared/services/sidebar-open.service';
import { Color , PaletteColors } from "src/app/shared/themes/colors-theme";
import { AuthService } from 'src/app/shared/services/auth.service';
import { CrudService } from 'src/app/shared/services/crud.service';
import { MenuItems } from "src/app/shared/models/Menu";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  collapsed = false;
  modalTemplate = false;
  innerWidth?: number;
  imgBackground : string = '';
  palatteColors = PaletteColors;
  backgroundImage : boolean = true;

  menuItems : any = [];
  username: any;
  fileImg: string = '';
  productorEntidad : any;

  loadspinner: boolean = false;
  isAdmin : boolean = false;
  entidadImg: any;

  constructor(
    private collapseService : SidebarOpenService,
    private coockieService: CookieService,
    private authService : AuthService,
    private crudService : CrudService
  ) { }

  ngOnInit(): void {

    this.menuItems = MenuItems.Menu;

    if(this.coockieService.get('user-color') && this.coockieService.get('user-color') != "null"){
      /* this.backgroundImage = false; */
      this.colorSolid(this.coockieService.get('user-color'));
      this.imgBackground = this.coockieService.get('user-theme') || 'vector-3';
    }else{
      /* this.backgroundImage = true; */
      this.imgBackground = this.coockieService.get('user-theme') || 'vector-3';
    }

    if(window.innerWidth <= 856){
      this.collapsed = true;
      this.collapseService.collapseMenu(this.collapsed);
      let maincontent = document.getElementById('main-content-admin');
      
      if(!maincontent?.classList.contains('full-width')){
        maincontent?.classList.add('full-width');
      }else{
        maincontent?.classList.remove('full-width');
      }

    }
    this.collapseService.getEmittedValue()
      .subscribe(value => {
        this.collapsed = value;
    });
  }

  active(){
    this.collapsed = true;
    this.collapseService.collapseMenu(this.collapsed);
  }

  collapseMenuButton(){
    this.collapsed = !this.collapsed;
    this.collapseService.collapseMenu(this.collapsed);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth <= 856 && this.collapsed === false){
      this.collapsed = true;
      this.collapseService.collapseMenu(this.collapsed);
    }

  /*   if(this.innerWidth >= 768 && this.collapsed === true){
      this.collapsed = false;
      this.collapseService.collapseMenu(this.collapsed);
    } */
   
  }

  showSubMenus(e : any){
    let arrowParent = e.target.parentElement;
    arrowParent.classList.toggle("showMenu");
  }

  showTemplates(){
    this.modalTemplate = !this.modalTemplate;
  }

  changeTemplate(name : string){
    this.imgBackground = name;
    this.coockieService.set('user-theme',this.imgBackground);
    this.coockieService.set('user-color','null');
    /* this.setColors(this.palatteColors['defaultColor']); */
    
    if(!this.backgroundImage){
      this.backgroundImage = true;
    }
  }

  colorSolid(name : string){
    var colors = {} as Color;
    this.coockieService.set('user-color',name);
    colors = this.palatteColors[name +'Color'];

    this.setColors(colors);

  }


  setColors(colors : Color){
    document.documentElement.style.setProperty("--dark-color-sidebar", colors.darkColor);
    document.documentElement.style.setProperty("--color-opacity", colors.opacityColor);
    document.documentElement.style.setProperty("--light-color-sidebar", colors.lightColor);
    document.documentElement.style.setProperty("--color-font-sidebar", colors.fontColor);
    document.documentElement.style.setProperty("--color-icons-sidebar", colors.iconColor);
  }

}
