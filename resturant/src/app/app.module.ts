import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturedFoodComponent } from './featured-food/featured-food.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { ChefsComponent } from './chefs/chefs.component';
import { OurProductsComponent } from './our-products/our-products.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FeaturedFoodComponent,
    SocialFeedComponent,
    ChefsComponent,
    OurProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
