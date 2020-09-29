import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { HomeComponent } from './components/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
 
//   {
//     path: 'test2',
//     component: Test2Component
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
