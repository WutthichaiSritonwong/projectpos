import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { ApiService } from '../api.service';
import { Products } from '../product';

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
  dataForm: FormGroup;
  listdata: any = [];
  product: string = '';

  constructor(private fb: FormBuilder, private dataService: ApiService) {
    setInterval(() => { this.today = Date.now() }, 1);
    this.dataForm = this.fb.group({
      id: ['', Validators.required],
      product_id: ['', Validators.required],
      count: ['', Validators.required],
      unit: ['', Validators.required],
      details: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      total_value: ['', Validators.required],
      vat: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  productss!: Products[];
  counts = 0;
  total_sum = 0;
  vat = 0;
  listdata2: any = [];
  onEnter() {


    // this.adddata();
    const formData = new FormData();
    formData.append('id', this.product);

    this.dataService.productsService(formData).pipe().subscribe(
      (data: Products[]) => {
        const id = data[0].product_id;
        if (id == data[0].product_id) {
          this.dataForm = this.fb.group({
            id: [data[0].uID, Validators.required],
            product_id: [data[0].product_id, Validators.required],
            count: [this.counts, Validators.required],
            unit: ['', Validators.required],
            details: [data[0].product_name, Validators.required],
            price: [data[0].rate, Validators.required],
            discount: ['', Validators.required],
            total_value: [this.total_sum, Validators.required],
            vat: [this.vat, Validators.required],
          });
        }

        // this.listdata2.push(this.dataForm.value);
        // console.log(this.listdata2);
        // let count = this.listdata2.filter((e: { product_id: string; }) => e.product_id === id).length;
        // let count = 0;
        // for (let i = 0; i < this.listdata2.length; i++) {
        //   if (this.listdata2[i].product_id === id) {
        //     count++;
        //   }
        // }
        // console.log('count', count);

        // for (let i = 0; this.listdata2.length > i; i++) {
        //   // console.log(this.listdata2[i]);
        //   if (id == this.listdata2[i].product_id) {
        //     this.counts += 1;
        //     this.vat = this.listdata2[i].price * 0.07;
        //     this.total_sum += (this.listdata2[i].price * this.counts);

        //     // this.dataForm = this.fb.group({
        //     //   id: [data[0].uID, Validators.required],
        //     //   product_id: [this.listdata2[i].product_id, Validators.required],
        //     //   count: [this.counts, Validators.required],
        //     //   unit: ['', Validators.required],
        //     //   details: [this.listdata2[i].details, Validators.required],
        //     //   price: [this.listdata2[i].price, Validators.required],
        //     //   discount: ['', Validators.required],
        //     //   total_value: [this.total_sum, Validators.required],
        //     //   vat: [this.vat, Validators.required],
        //     // });
        //     this.listdata.pop();
        //     this.listdata.push(this.dataForm.value)
        //   }


        // }

        const count_id = [];
        if (data[0].product_id == id) {
          count_id.push(data[0].product_id);
          console.log('count_id', count_id);

          console.log('test', count_id.indexOf(id));

          this.counts += 1;
          console.log('counts', this.counts);

          this.vat = data[0].rate * 0.07;
          console.log('vat', this.vat);

          this.total_sum = data[0].rate * this.counts;
          console.log('total_sum', this.total_sum);

          this.dataForm = this.fb.group({
            id: [data[0].uID, Validators.required],
            product_id: [data[0].product_id, Validators.required],
            count: [this.counts, Validators.required],
            unit: ['', Validators.required],
            details: [data[0].product_name, Validators.required],
            price: [data[0].rate, Validators.required],
            discount: ['', Validators.required],
            total_value: [this.total_sum, Validators.required],
            vat: [this.vat, Validators.required],
          });
          // this.listdata.pop();
          this.listdata.push(this.dataForm.value);
          var arr2 = [...this.listdata];
          console.log('listdata:', this.listdata);
          // this.listdata2 = this.listdata;
          console.log('listdata2:', arr2.pop());


        }

        // console.log(this.listdata2);
        // for (let i = 0; this.listdata2.length > i; i++) {
        //   if (this.listdata2[i].product_id = data[0].product_id) {

        //   } else {

        //   }

        // }

        // let pid = [...new Set(this.listdata2.map((res:any)=>res.product_id))];
        // console.log(pid);


      }
    );
    // this.dataService.producs(this.product).subscribe(data => {
    //   console.log(data);
    // })

    // this.dataService.produc(this.product).subscribe((res: any) => {
    //   console.log(res);
    // });

    // this.dataService.produc(this.product).subscribe((res: any) => {
    //   console.log(res);
    // });

    // console.log(this.dataService.setProduct);
    this.product = '';
  }
  adddata() {
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
  postdata() {
    // this.dataService.produc(this.product).subscribe((res: any) => {
    //   console.log(res);
    // });
  }

}
