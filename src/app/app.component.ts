import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {UploadButtonComponent} from "./components/upload-button/upload-button.component";
import {PreviewComponent} from "./components/preview/preview.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, NavbarComponent, UploadButtonComponent, PreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'synthetic-data-generator';
}
