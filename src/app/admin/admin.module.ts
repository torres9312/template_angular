import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingPageModule } from '../shared/loading-page/loading-page.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { TablesComponent } from './tables/tables.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    DashboardComponent,
    ExampleComponent,
    TablesComponent,
    ButtonsComponent
  ],
  exports : [
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule
  ],
  providers: [
  

  ]
})
export class AdminModule { }
