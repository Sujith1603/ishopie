import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent implements OnInit {

  constructor() { }
  ngOnInit(): void{

  }
  displayNotification: boolean = false;
  
  closeNotification(){
    this.displayNotification = true;

  }

}

