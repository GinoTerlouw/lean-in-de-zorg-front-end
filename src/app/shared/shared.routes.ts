import { Routes } from '@angular/router';

import { LoginComponent } from '../user/login/login.component';
import {AccountsListComponent} from '../accounts-list/accounts-list.component';


export const sharedRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accounts-list', component: AccountsListComponent}
];
