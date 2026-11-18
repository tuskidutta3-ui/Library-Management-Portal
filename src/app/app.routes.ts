import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './core/guard/auth.guard';
import { LibrarianDashboardComponent } from './pages/librarian-dashboard/librarian-dashboard.component';
import { MemberDashboardComponent } from './pages/member-dashboard/member-dashboard.component';
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'librarian-dasboard',
    component: LibrarianDashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'librarian',
        loadChildren: () =>
          import('./pages/librarian/librarian.module').then(
            (m) => m.LibrarianModule,
          ),
      },
    ],
  },
  {
    path: 'member-dashboard',
    component: MemberDashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'member',
        loadChildren: () =>
          import('./pages/member/member.module').then((m) => m.MemberModule),
      },
    ],
  },
  {
    path: 'app',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'utility',
        loadChildren: () =>
          import('./pages/utility/utility.module').then((m) => m.UtilityModule),
      },
      {
        path: 'master',
        loadChildren: () =>
          import('./pages/master/master.module').then((m) => m.MasterModule),
      },
      {
        path: 'transaction',
        loadChildren: () =>
          import('./pages/transaction/transaction.module').then(
            (m) => m.TransactionModule,
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./pages/reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'process',
        loadChildren: () =>
          import('./pages/process/process.module').then((m) => m.ProcessModule),
      },
      {
        path: 'librarian',
        loadChildren: () =>
          import('./pages/librarian/librarian.module').then(
            (m) => m.LibrarianModule,
          ),
      },
      {
        path: 'member',
        loadChildren: () =>
          import('./pages/member/member.module').then((m) => m.MemberModule),
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'app' },
];
