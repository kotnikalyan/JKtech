import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'users', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
      { path: 'document', loadChildren: () => import('../document/document.module').then(m => m.DocumentModule) },
      { path: 'questions', loadChildren: () => import('../questions/questions.module').then(m => m.QuestionsModule) },
      { path: 'interfase', loadChildren: () => import('../interface/interface.module').then(m => m.InterfaceModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
