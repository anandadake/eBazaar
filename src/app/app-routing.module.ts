import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component'
import { StoresComponent } from './stores/stores.component'
import { CountersComponent } from './counters/counters.component'

const routes: Routes = [
  {path : '',         component: CitiesComponent},
  {path : 'stores',   component: StoresComponent},
  {path : 'counters', component: CountersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
