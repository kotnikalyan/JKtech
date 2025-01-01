import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceComponent } from './interface.component';

const routes: Routes = [
    {
        path: '', redirectTo:'inter', pathMatch: 'full'
      },
      {
        path: 'inter', component: InterfaceComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterfaceRoutingModule { }
