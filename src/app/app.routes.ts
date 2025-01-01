import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';


export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    },

    // { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    // { path: 'document', loadChildren: () => import('./document/document.module').then(m => m.DocumentModule) },
    // { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
    // { path: 'interfase', loadChildren: () => import('./interface/interface.module').then(m => m.InterfaceModule) },
];
