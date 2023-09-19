import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private typed: Typed 


  ngOnInit(): void {
    this.typed = new Typed(".multiple-text", {
      strings: ["Frontend Developerem", "Producentem Muzycznym", "Inżynierem dźwięku"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    })
  }

}
