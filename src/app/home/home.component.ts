import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sliderIems = [
    {title: 'Lorem Ipsum',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg',
      text: 'Lorem ipsum dolor sit amet, consctetur adipiscing elit. ' +
      'Nulla sed mollis purus, sed tristique nisl. Donec egestas vulputate justo.'
    },
    {title: 'Strong Mask',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla sed mollis purus, sed tristique nisl. Donec egestas vulputate justo.'
    },
    {title: 'Light Mask',
      img: 'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Nulla sed mollis purus, sed tristique nisl. Donec egestas vulputate justo.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
