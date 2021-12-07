import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule } from '@angular/forms';
import { IpzDirective } from './directives/ipz.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterTextPipe } from './pipes/filter-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    IpzDirective,
    FilterPipe,
    FilterTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
