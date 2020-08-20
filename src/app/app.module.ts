import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SlideComponent } from './component/slide/slide.component';
import { SolarcellComponent } from './product/solarcell/solarcell.component';
import { Solar1Component } from './product/solarcell/solar1/solar1.component';
import { Solar2Component } from './product/solarcell/solar2/solar2.component';
import { Solar3Component } from './product/solarcell/solar3/solar3.component';
import { Solar4Component } from './product/solarcell/solar4/solar4.component';
import { NewsComponent } from './component/news/news.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'news',             component: NewsComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'about',            component: AboutComponent },
    { path: 'solarcell',        component: SolarcellComponent},
    { path: 'solar1',        component: Solar1Component},
    { path: 'solar2',        component: Solar2Component},
    { path: 'solar3',        component: Solar3Component},
    { path: 'solar4',        component: Solar4Component},


    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppmenuComponent,
    HomeComponent,
    AboutComponent,
    SlideComponent,
    SolarcellComponent,
    Solar1Component,
    Solar2Component,
    Solar3Component,
    Solar4Component,
    NewsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
