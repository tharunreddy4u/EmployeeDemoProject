import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Employeeservice } from 'src/app/employeeservice.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {

  form: FormGroup;
  showEditMessage: boolean = false;
  showDeleteMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private employeeListService: Employeeservice
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      userName: '',
      job: '' ,
      id: ''                
    })
  }


  onSubmit(value: any){

    
    this.employeeListService.editUser(value).subscribe(res => {
      console.log("edit employee", res);
      this.showEditMessage = true;
    })

    setTimeout(() => {
        this.showEditMessage = false;
    },2000);

  }

  deleteEmployee(value: any) {

    this.employeeListService.deleteUser(value).subscribe(res => {
      console.log("delete employee",res);
      this.showDeleteMessage = true;
    })

    setTimeout(() => {
      this.showDeleteMessage = false;
  },2000);
  }
}
