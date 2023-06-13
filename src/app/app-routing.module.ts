import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
import { NotFoundComponent } from './shared/404/not-found.component';

const routes: Routes = [

  {
      path: '',
      loadChildren : () => PublicModule
  },
  {
      path: 'panel',
      /* canActivate: [AuthGuard], */
      loadChildren : () => AdminModule
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true
  })],
  exports: [
    RouterModule,
    PublicModule,
    AdminModule
  ]
})
export class AppRoutingModule { }
