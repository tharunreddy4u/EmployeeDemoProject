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
  public catData: List<any>;
  public itemList: any = [];

  constructor(private employeeListService: Employeeservice) { 
  }

  ngOnInit() {
    this.employeeListService.getUser().subscribe(
      res => {
        this.employeeList = res;
        this.employeeData = res.data;
        this.dupData = res.data;
        
    });

    this.employeeListService.getCategories().subscribe(

      res => {
        this.catData = res;
        console.log("categories data",this.catData);
      }
    )
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
    

  addItem(item: any) {
    //console.log("ite val",item)
    //Object.assign({}, item)
    this.itemList = this.itemList.concat(item);
    console.log("item list", this.itemList);
  }

}
