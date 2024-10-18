// src/app/add-user/add-user.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      address: [''],
    });
  }

  onSubmit(): void {
    this.userService.addUser(this.userForm.value).subscribe((response) => {
      console.log('User added successfully', response);
    });
  }
}
