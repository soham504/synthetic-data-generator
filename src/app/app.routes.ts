import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PreviewComponent} from "./components/preview/preview.component";

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent,
    },
    {
      path : 'preview',
      component : PreviewComponent,
    },
    // {
    //     path: 'data-analysis',
    //     loadChildren: () =>
    //         import('./modules/dataanalysis').then((m) => m.,
    // },
    // {
    //     path : 'data-generator',
    //     loadChildren: () =>
    //          import('./modules/datagenerator').then((m) => m.,
    // }
];
