import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts'
import { OwlModule } from 'ngx-owl-carousel';

import { AuthenticationService } from './services/authentication.service'

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
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserGraficInfoComponent } from './components/user-grafic-info/user-grafic-info.component';

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
    GeographyComponent,
    UserProfileComponent,
    UserGraficInfoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    OwlModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
