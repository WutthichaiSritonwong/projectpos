import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { ApiService } from '../api.service';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = [...ELEMENT_DATA];

  // @ViewChild(MatTable)
  // table!: MatTable<PeriodicElement>;

  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  //   this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  //   this.table.renderRows();
  // }

  // removeData() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }

  Name: string = 'Admin';
  today: number = Date.now();
  dataForm : FormGroup;
  listdata:any = [];
  product:string ='';

  constructor(private fb: FormBuilder,private dataService: ApiService) { 
    setInterval(() => { this.today = Date.now() }, 1); 
    this.dataForm = this.fb.group({
      id: ['s', Validators.required],
      product_id: ['', Validators.required],
      count: ['', Validators.required],
      unit: ['', Validators.required],
      details: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      total_value: ['', Validators.required],
      vat: ['1', Validators.required],
    })
  }
  
  ngOnInit(): void {
  }
  onEnter() {
    this.adddata();
    this.product = '';
  }
  adddata(){
    // this.listdata.push(this.dataForm.value);
    this.dataForm = this.fb.group({
      id: ['1', Validators.required],
      product_id: [this.product, Validators.required],
      count: ['', Validators.required],
      unit: ['', Validators.required],
      details: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      total_value: ['', Validators.required],
      vat: ['', Validators.required],
    })

    this.listdata.push(this.dataForm.value)
    // console.log(this.dataForm.value);

    
  }

}
