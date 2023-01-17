import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfosServersComponent } from './infos-servers/infos-servers.component';
import { EditServersComponent } from './edit-servers/edit-servers.component';
import { SUB_ROUTING } from './sub.routing';

@NgModule({
  declarations: [
    HomeServersComponent,
    InfosServersComponent,
    EditServersComponent,
  ],
  imports: [CommonModule, SUB_ROUTING],
})
export class SubModule {}
