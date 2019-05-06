import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserlogComponent } from './userlog/userlog.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainpagaComponent } from './mainpaga/mainpaga.component';
import { SectionsComponent } from './components/sections/sections.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { UserBasicInfoComponent } from './components/user-basic-info/user-basic-info.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MathComponent } from './components/math/math.component';
import { SpanishComponent } from './components/spanish/spanish.component';
import { HistoryComponent } from './components/history/history.component';
import { EthicsComponent } from './components/ethics/ethics.component';
import { ScienceComponent } from './components/science/science.component';
import { ArtComponent } from './components/art/art.component';
import { GeographyComponent } from './components/geography/geography.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlogComponent,
    UserregisterComponent,
    NavComponent,
    FooterComponent,
    MainpagaComponent,
    SectionsComponent,
    UserNavComponent,
    UserBasicInfoComponent,
    NotificationsComponent,
    MathComponent,
    SpanishComponent,
    HistoryComponent,
    EthicsComponent,
    ScienceComponent,
    ArtComponent,
    GeographyComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
