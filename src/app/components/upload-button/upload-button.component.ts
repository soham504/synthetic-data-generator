import {Component, OnInit} from '@angular/core';
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import { HttpClient } from '@angular/common/http';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

interface MyJsonData {
    // Define your data properties here
    // e.g.,
    name: string;
    description: string;
    // ...
}


@Component({
    selector: 'app-upload-button',
    standalone: true,
    imports: [FileUploadModule, ToastModule, CommonModule],
    providers: [MessageService],
    templateUrl: './upload-button.component.html',
    styleUrl: './upload-button.component.scss'
})
export class UploadButtonComponent implements OnInit{
    selectedFile: File | null = null;
    uploadError: string = '';


    constructor(private http: HttpClient) {} // Inject HttpClient

    ngOnInit() {}

    onFileSelect(event: { files: (File | null)[]; }) {
        this.uploadError = ''; // Clear previous error
        this.selectedFile = event.files[0]; // Get the first selected file
    }

    async uploadJSON() {
        if (!this.selectedFile) {
            this.uploadError = 'No file selected!';
            return;
        }

        const reader = new FileReader();
        reader.readAsText(this.selectedFile);

        reader.onload = async (e: any) => {
            try {
                const uploadedData: any = JSON.parse(e.target.result); // Parse data as JSON
                await this.sendJSONToServer(uploadedData);
            } catch (error) {
                this.uploadError = 'Error parsing JSON file!';
                console.error('Error parsing JSON:', error);
            }
        };
    }

    async sendJSONToServer(data: any) {
        this.http.post<any>('/api/upload-json', data) // Send data to backend API
            .subscribe(
                response => {
                    console.log('Upload successful:', response);
                    // Handle successful upload (e.g., display success message)
                    this.selectedFile = null; // Clear selected file after upload
                },
                error => {
                    this.uploadError = 'Error uploading file!';
                    console.error('Upload error:', error);
                    // Handle upload errors (e.g., network issues, server errors)
                }
            );
    }
}
