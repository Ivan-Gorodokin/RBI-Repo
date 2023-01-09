import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes.module';
import { ShoppingListModule } from './shopping-list.module';
import { CoreModule } from './shared/core.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
