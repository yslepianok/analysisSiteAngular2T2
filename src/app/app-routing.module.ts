import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestingComponent }      from './testing.component';
import { AnalysisComponent }  from './analysis.component';

const routes: Routes = [
  { path: 'testing', component: TestingComponent },
  { path: 'analysis', component: AnalysisComponent }
  //{ path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}