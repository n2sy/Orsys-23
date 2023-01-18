import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { DirectComponent } from './direct/direct.component';
import { InfosComponent } from './infos/infos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { ReactFormComponent } from './react-form/react-form.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'cv',
  //   component: CvComponent,
  //   children: [
  //     //{ path: '', component: CvComponent },
  //     { path: 'add', component: AddComponent },
  //     { path: 'djamel', component: DirectComponent },
  //     { path: ':id', component: InfosComponent },
  //     { path: ':id/edit', component: UpdateComponent },
  //   ],
  // },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      { path: 'djamel', component: DirectComponent },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: UpdateComponent },
    ],
  },
  { path: 'servers', component: ManageServersComponent },
  {
    path: 'manage-serv',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'react', component: ReactFormComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const ORSYS_ROUTING = RouterModule.forRoot(myRoutes);
