import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  constructor() { }


  links = ['Pares e impares', 'Activity2', 'Activity3', 'Activity4', 'Activity5', 'Activity6', 'Activity7', 'Activity8', 'Activity9'];
  alinks = [
    {act: 'Pares e impares', srcImg: '../../../assets/img/example.jpg' },
    {act: 'Activity2', srcImg: '../../../assets/img/adventure-time-landscape.jpg' }, 
    {act: 'Activity3', srcImg: '../../../assets/img/adventure-time-landscape.jpg' }, 
    {act: 'Activity4', srcImg: '../../../assets/img/adventure-time-landscape.jpg' }, 
    {act: 'Activity5', srcImg: '../../../assets/img/adventure-time-landscape.jpg' }, 
    {act: 'Activity6', srcImg: '../../../assets/img/adventure-time-landscape.jpg' }, 
    {act: 'Activity7', srcImg: '../../../assets/img/adventure-time-landscape.jpg' }, 
    {act: 'Activity8', srcImg: '../../../assets/img/adventure-time-landscape.jpg' }, 
    {act: 'Activity9', srcImg: '../../../assets/img/adventure-time-landscape.jpg' }]
  imaSrc = ['../../../assets/img/adventure-time-landscape.jpg']
  myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
  mySlideOptions={items: 3, dots: false, nav: true};

  ngOnInit() {
    
  }

}
