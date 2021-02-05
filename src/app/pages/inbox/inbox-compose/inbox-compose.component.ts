import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'elastic-inbox-compose',
  templateUrl: './inbox-compose.component.html'
})
export class InboxComposeComponent implements OnInit {

  respondOptions = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [ ] }, { 'background': [ ] }],          // dropdown with defaults from theme
      [{ 'font': [ ] }],
      [{ 'align': [ ] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  constructor(
    private dialogRef: MatDialogRef<InboxComposeComponent>
  ) { }

  ngOnInit() {
  }

  send() {
    this.dialogRef.close('Your message has been send.');
  }

}
