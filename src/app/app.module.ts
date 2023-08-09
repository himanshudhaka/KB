import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { OthersComponent } from './pages/home/others/others.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
// import { HttpModule } from '';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DocComponent } from './pages/doc/doc.component';
// import { DocumentComponent } from './pages/home/client/document/document.component';
import { DocumentsComponent } from './pages/home/client/documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayOfComponents,
    OthersComponent,
    DocComponent,
    DocumentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
