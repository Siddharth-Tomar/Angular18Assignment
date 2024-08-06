import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiDataComponent } from './components/api-data/api-data.component';
import { FormPageComponent } from './components/form-page/form-page.component';


const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'form-page', component: FormPageComponent },
];

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
