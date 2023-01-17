import { RouterModule, Routes } from '@angular/router';
import { EditServersComponent } from './edit-servers/edit-servers.component';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfosServersComponent } from './infos-servers/infos-servers.component';

const subRoutes: Routes = [
  {
    path: '',
    component: HomeServersComponent,
    children: [
      { path: ':id', component: InfosServersComponent },
      { path: ':id/edit', component: EditServersComponent },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
