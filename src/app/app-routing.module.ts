import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'service', loadChildren: './service/service.module#ServiceModule' },
    { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
    { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
