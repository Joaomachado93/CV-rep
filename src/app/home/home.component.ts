import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  person = {
    name: "João",
    age: 29,
    address: "Serzedelo, Guimarães",
    img:"../../assets/eu.jpg"
  }
    
  


  constructor() { }

  ngOnInit(): void {
  }

}
