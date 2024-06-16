import { Component } from '@angular/core';
import {PreviewComponent} from "../components/preview/preview.component";
import {UploadButtonComponent} from "../components/upload-button/upload-button.component";
import {Button, ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        PreviewComponent,
        UploadButtonComponent,
        ButtonDirective,
        Ripple,
        Button
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor() {
    }

    handleClick() {
        console.log('button clicked')
    }
}
