import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { PersonnelComponent } from './personnel/personnel.component';

const routes: Routes = [
  {
    path: 'facture',
    component: FactureComponent,
  },
  {
    path: 'personnel',
    component: PersonnelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
