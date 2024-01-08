import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void{

  }
  products=[
  {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/products/prod1.jpeg'},
  {id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: '/assets/products/prod2.jpeg'},
  {id:3, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: '/assets/products/prod3.jpeg'},
  {id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available', image: '/assets/products/prod4.jpeg'},
  {id:5, name: 'LG Refrigerator with Door Cooling', price: '2815', color: 'White', available: 'Not Available', image: '/assets/products/prod5.jpeg'},
  {id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', image: '/assets/products/prod6.jpeg'}
  ];
  

}
  

  


