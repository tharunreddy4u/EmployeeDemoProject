import { Component, OnInit } from '@angular/core';
import { Employeeservice } from 'src/app/employeeservice.service';


@Component({
  selector: 'app-employeephoto',
  templateUrl: './employeephoto.component.html',
  styleUrls: ['./employeephoto.component.scss']
})
export class EmployeephotoComponent implements OnInit {

  public empPhotoData: any;
  public employeeData: any

  constructor(private employeeListService: Employeeservice) {
      
    }

  ngOnInit() {
    this.employeePhotoInfo();
  }

  employeePhotoInfo() {
    this.employeeListService.getUserPhoto().subscribe(res => {

          this.empPhotoData = res.data;
    })

    this.employeeListService.getUser().subscribe(
      res => {
        this.employeeData = res.data;
        
    });
    
  }

}
