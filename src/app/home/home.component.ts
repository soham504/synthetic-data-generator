import { Component } from '@angular/core';
import {PreviewComponent} from "../components/preview/preview.component";
import {UploadButtonComponent} from "../components/upload-button/upload-button.component";
import {Button, ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import { RouterLink } from '@angular/router';

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
    jsonData = {
        name: 'Sample Data',
        description: 'This is some sample data',
        items: [
            { id: 1, value: 'Item 1' },
            { id: 2, value: 'Item 2' }
        ]
    };

    constructor() {
    }

    handleClick() {
        const dataString = JSON.stringify(this.jsonData, null, 2);
        const blob = new Blob([dataString], { type: 'application/json;charset=utf-8' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Sample_data.json';
        link.click();
    }

    nextPage() {
        window.location.href = '/preview';
    }
}
