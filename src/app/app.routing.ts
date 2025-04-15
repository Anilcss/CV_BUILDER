import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';


const appRoutes: Routes = [
 
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      // Lazy Loaded Routes
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
     
    ]
  },

  // Fallback route (Optional)
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
