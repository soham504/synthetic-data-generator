import {Component} from '@angular/core';
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'app-upload-button',
    standalone: true,
    imports: [FileUploadModule, ToastModule, CommonModule],
    providers: [MessageService],
    templateUrl: './upload-button.component.html',
    styleUrl: './upload-button.component.scss'
})
export class UploadButtonComponent {
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {
    }

    onUpload(event: FileUploadEvent) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
