import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListingComponent } from './pokemon-listing/pokemon-listing.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { HeaderComponent } from './header/header.component'
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, POSITION, SPINNER } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
bgsColor: "rgba(12,80,219,0.98)",
bgsOpacity: 1,
bgsPosition: POSITION.bottomRight,
bgsSize: 40,
bgsType: SPINNER.threeStrings,
fgsColor: "rgba(12,80,219,0.98)",
fgsPosition: POSITION.centerCenter
};

@NgModule({
  declarations: [
    AppComponent,
    PokemonListingComponent,
    PokemonDetailsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule,
    NgxUiLoaderRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
