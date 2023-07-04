import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationPageComponent } from './modules/content/components/presentation-page/presentation-page.component';

const routes: Routes = [
  {
    path: '',
    component: PresentationPageComponent,
  },
  {
    path: 'signin',
    component: PresentationPageComponent,
  },
  {
    path: 'signup',
    component: PresentationPageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
