import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalModalComponent } from './normal-modal/normal-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
