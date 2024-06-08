import { Routes } from '@angular/router';
import { HeaderComponent } from './sitio/header/header.component';
import { BodyComponent } from './sitio/body/body.component';
import { FooterComponent } from './sitio/footer/footer.component';

export const routes: Routes = [
    {
        path: 'header', component:HeaderComponent
    },
    {
        path: 'body', component:BodyComponent
    },
    {
        path: 'footer', component:FooterComponent
    },
];
