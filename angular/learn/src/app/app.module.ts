import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbdButtonsCheckboxComponent } from './components/ngbd-buttons-checkbox/ngbd-buttons-checkbox.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ModalComponent } from './components/modal/modal.component';
@NgModule({
  declarations: [AppComponent, NgbdButtonsCheckboxComponent, PaginationComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
