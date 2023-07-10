import { Component } from '@angular/core';
import { FormGroup ,  Validators, FormControl} from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {



  constructor(private messageService:MessageService) {
   
  }

  inputForm : FormGroup= new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    num: new FormControl('', [Validators.required]),

  })

  onSubmit() {
    this.messageService.add({severity:'success',summary:'success',detail:'submited'})
    console.log(this.inputForm.value);
    
    }
}
