import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document.component';

const routes: Routes = [
   {
      path: '', redirectTo:'document', pathMatch: 'full'
    },
    {
      path: 'document', component: DocumentComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
