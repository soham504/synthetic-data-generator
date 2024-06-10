import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent,
    },
    // {
    //     path: 'data-analysis',
    //     loadChildren: () =>
    //         import('./modules/dataanalysis').then((m) => m.,
    // },
    // {
    //     path : 'data-generator',
    //     component : '',
    // }
];
