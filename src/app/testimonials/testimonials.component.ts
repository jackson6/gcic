import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimony: Array<object>;

  constructor() { }

  ngOnInit() {
    this.testimony = [
      {avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg', name: 'Anna Deynah', title: 'Web Designer', body: 'Ut enim ad ' +
        'minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'},
      {avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg', name: 'John Doe', title: 'Web Deveoper', body: 'Ut enim ad ' +
        'minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'},
      {avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg', name: 'Maria Kate', title: 'Photographer', body: 'Ut enim ad ' +
        'minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'}
      ];
  }

}
