import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectGuard } from '../shared/guards/redirect.guard';
import { AuthGuard } from '../shared/guards/auth.guard';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from '../shared/404/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExampleComponent } from './example/example.component';
import { TablesComponent } from './tables/tables.component';
import { ButtonsComponent } from './buttons/buttons.component';


const routes: Routes = [


    {
      path: '',
      component: MainComponent,
    /*   canActivate: [RedirectGuard], */
      children :[
        {
          path: '',
          component: NotFoundComponent
        },
        { path: '404', component: NotFoundComponent},
        {
            path : 'dashboard',
            component: DashboardComponent
        },
        {
            path : 'example',
            component: ExampleComponent
        },
        {
          path : 'tables',
          component: TablesComponent
        },
        {
          path : 'buttons',
          component: ButtonsComponent
        }
      ]
    }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
