import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void{

  }
  slogan: string = "you are one stop away from everything"
  logan: string = "50% off in all electronic goods"
  source: string = "/assets/download.jpeg"
  getslogan(){
    return "Newyear sales will be on in 3 days.Hurry up!!!!";
    
  }

}
