import { Component, OnInit } from '@angular/core';
import { Employeeservice } from 'src/app/employeeservice.service';
import { List } from 'immutable';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  public employeeList: any;
  public employeeData: List<any>;
  public dupData: List<any>;
  public searchText: any;
  public searchPage: any;
  public searchId: any;

  constructor(private employeeListService: Employeeservice) { 
  }

  ngOnInit() {
    this.employeeListService.getUser().subscribe(
      res => {
        this.employeeList = res;
        this.employeeData = res.data;
        this.dupData = res.data;
        
    });
  }

  searchEmployee(value: any) {
      
      if(value)
      this.employeeData = this.dupData.filter(x => x.first_name.toLowerCase().match(value.toLowerCase()) )
      else
      this.employeeData = this.dupData;

      this.searchId = '';
      this.searchPage = '';
    
  }

  searchEmployeeId(value: any) {
    if(value)
      this.employeeData = this.dupData.filter(x => x.id== value )
      else
      this.employeeData = this.dupData;

      this.searchText ='';
      this.searchPage = '';
  }

  searchEmployeePage(value: any) {
    this.employeeListService.getUserPage(value).subscribe(
      res => {
        this.employeeList = res;
        this.employeeData = res.data;
        this.dupData = res.data;
        
    });

    this.searchText = '';
    this.searchId = '';
  }  
    

}
