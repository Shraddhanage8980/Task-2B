import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-2B';
  @ViewChild('phoneEle') phoneNumberEle : ElementRef | undefined
  @ViewChild('emailEle') emailIdEle : ElementRef | undefined
  showPhoneNumberEle = false;
  showEmailEle = false;

  Onclick(){
    let selectBtn = this.phoneNumberEle?.nativeElement.checked ? 'Phone' : 'Email';
    this.showPhoneNumberEle = selectBtn  === "Phone";
    this.showEmailEle = selectBtn  === "Email";
  }
}
