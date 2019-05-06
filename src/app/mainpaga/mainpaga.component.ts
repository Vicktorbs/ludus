import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpaga',
  templateUrl: './mainpaga.component.html',
  styleUrls: ['./mainpaga.component.css']
})
export class MainpagaComponent implements OnInit {

  sesion: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  startSesion() {
    this.sesion = false;
  }

  choosin() {
    this.sesion = true;
  }

}
