import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Employeeservice } from 'src/app/employeeservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  form: FormGroup;
  showMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private employeeListService: Employeeservice
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      job: ['', Validators.required],                
    })
  }


  clickSubmit(value: any){

    
    this.employeeListService.addUser(value).subscribe(res => {
      console.log("added employee", res);
      this.showMessage = true;
    })

    setTimeout(() => {
        this.showMessage = false;
    },2000);

  }
}
