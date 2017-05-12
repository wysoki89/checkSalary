import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { SearchComponent }   from './search.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroesComponent }      from './heroes.component';
import { CompanyService }          from './company.service';
import { FilteredCompaniesPipe } from './filtered-companies.pipe';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    FilteredCompaniesPipe
    // HeroDetailComponent,
    // HeroesComponent
  ],
  providers: [ CompanyService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }