import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipeService } from './recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { DetailsComponent } from './details/details.component';
import { FilterPipe } from './filter.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent,
    DetailsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatPaginatorModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }