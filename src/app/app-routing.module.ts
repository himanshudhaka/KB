import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './pages/home/client/client.component';
import { DocumentComponent } from './pages/home/document/document.component';
import { OthersComponent } from './pages/home/others/others.component';
import { AuthGuard } from './services/auth.guard';
import { DocumentsComponent } from './pages/home/client/documents/documents.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'clients',
        component: ClientComponent,
      },
      {
        path: 'documents',
        component: DocumentComponent,
      },
      {
        path: 'others',
        component: OthersComponent,
      },
      {
        path: 'clients/:id/documents',
        component: DocumentsComponent,
      },
      {
        path: '**',
        component: ClientComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const ArrayOfComponents = [
  HomeComponent,
  LoginComponent,
  ClientComponent,
  DocumentComponent,
  OthersComponent,
  DocumentsComponent,
];
