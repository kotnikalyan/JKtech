import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './document.component.html',
  styleUrl: './document.component.css'
})
export class DocumentComponent {
  shortLink: string = ''; // Variable to store shortLink from api response
  loading: boolean = false; // Flag variable
  file: any  // Variable to store file to Upload
  onChange(event:any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    if (this.file) {
      this.loading = !this.loading;
      console.log(this.file);
      // this.fileUploadService.upload(this.file).subscribe((event: any) => {
      //   if (typeof event === 'object') {
      //     // Short link via api response
      //     this.shortLink = event.link;
          this.loading = false; // Flag variable
      //   }
      // });
    }
  }
}
