import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CareersComponent } from './careers/careers.component';
import { CareerDetailsComponent } from './career-details/career-details.component';
import { BankAccountComponent } from './bank-account/bank-account.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'career-details/:id',
    component: CareerDetailsComponent
  },
  {
    path: 'bank-account/:id',
    component: BankAccountComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
