import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.minLength(4)),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.log('\n\n THIS IS ONSBUMIT !! \n');
    console.log(this.profileForm.value);
    console.warn(this.profileForm.value);
  }
}
