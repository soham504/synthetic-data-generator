import { Component } from '@angular/core';
import {PreviewComponent} from "../components/preview/preview.component";
import {UploadButtonComponent} from "../components/upload-button/upload-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        PreviewComponent,
        UploadButtonComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor() {
    }
}
