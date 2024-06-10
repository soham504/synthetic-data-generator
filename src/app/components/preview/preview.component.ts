import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-preview',
  standalone: true,
    imports: [TableModule, CommonModule,FormsModule, InputTextareaModule,ButtonModule],
    // providers: [ProductService],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
    value!: string;
    // products!: Product[];
    //
    // constructor(private productService: ProductService) {}
    //
    // ngOnInit() {
    //     this.productService.getProductsMini().then((data) => {
    //         this.products = data;
    //     });
    // }
}
