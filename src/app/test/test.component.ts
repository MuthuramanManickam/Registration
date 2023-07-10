import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { TableRowSelectEvent } from 'primeng/table';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  documentForm: FormGroup;
  selectedFile!: File;


  constructor(private messageService: MessageService, private http: HttpClient , private formBuilder :FormBuilder) {

    this.minDate = new Date('2023/06/21');
    this.maxDate = new Date('2023/08/12');

    this.documentForm = this.formBuilder.group({
      document: ['']
    });
  }
  

  onFileChange(event: any) {
    // throw new Error('Method not implemented.');

    const file : File  = event.target.files[0]
    this.selectedFile=file 
    console.log("File", this.selectedFile);
    

    this.documentForm.reset()
  }
  uploadDocument() {
    const formData = new FormData();
    formData.append('document',this.documentForm?.get('document')?.value)

    this.http.post('http://localhost:3000',formData).subscribe(
      response=>{
        console.log('Upload success', response);
      },
      error=>{
        console.log('upload error',error);
        
      }
    )
}


onRowSelect($event: TableRowSelectEvent, _t150: OverlayPanel) {
  throw new Error('Method not implemented.');
}


// myForm:FormGroup;

data: any;
products: any = [];
selectedDate!: Date;
minDate: Date;
maxDate: Date;
value: any;
date: any;
productTable: any = [];
sidebarVisible: any;
selectedCities: any;
visible: boolean = false;
cities: any = [
  { label: "sk", value: "1" },
  { label: "sk1", value: "2" },
  { label: "sk2", value: "3" },
  { label: "sk3", value: "4" }
];
selectedProduct: any = [
  { name: "muhtu", price: 23 },
  { name: "muhtu", price: 23 },
  { name: "muhtu", price: 23 },
  { name: "muhtu", price: 23 },
  { name: "muhtu", price: 23 }
];







textBoxForm: FormGroup = new FormGroup({
  textarea: new FormControl('', [Validators.required]),
  name: new FormControl('', [Validators.required])
})

tableForm: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  age: new FormControl('', [Validators.required])
})

checkBoxGroup: FormGroup = new FormGroup({
  Checkbox: new FormControl('', [Validators.required]),
  // tiruchy:new FormControl('', [Validators.required]),
  // otp:new FormControl('', [Validators.required])
})
dropDownGroup: FormGroup = new FormGroup({
  city: new FormControl('', [Validators.required])
})

showDialog() {
  this.visible = true;

}
onSubmit() {
  this.messageService.add({ severity: 'success', summary: 'success', detail: 'sumitted' })
  console.log(this.textBoxForm.value);
}
onCalender(e: any) {
  console.log(e)
}
addProductTable() {
  console.log(this.tableForm.value);
  if (!this.tableForm.invalid) {
    this.productTable.push(this.tableForm.value);
    this.tableForm.reset();
  }

}
onCheckBox() {
  console.log(this.checkBoxGroup.value);

}


addProduct(Code: string, Name: string, Category: string, Quantity: string) {

  const product = {
    code: Code,
    name: Name,
    category: Category,
    quantity: Quantity
  }
  this.products.push(product)
  console.log(this.products, "hjgyuyttr");

}
onDropDown() {
  console.log(this.dropDownGroup.value.city.label);

}

showSuccess(){

}




}
