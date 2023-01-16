import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './pipes/short.pipe';

import { NoImagePipe } from './pipes/no-image.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FirstService } from './services/first.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    HomeAccountComponent,
    AddAccountComponent,
    ItemAccountComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    NoImagePipe,
    FilterPipe,
  ],
  imports: [BrowserModule, FormsModule],

  providers: [FirstService],
  bootstrap: [AppComponent],
})
export class AppModule {}
