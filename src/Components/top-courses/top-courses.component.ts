import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.scss']
})
export class TopCoursesComponent implements OnInit {

  constructor() { }

  public courseData=[
    {title:'Fashion Photography From Professional',date:'21/12/19', ratings:5, price:'$70.99',comment:2},
    {title:'Fashion Photography From Professional',date:'21/12/19', ratings:5, price:'$70.99',comment:2},
    {title:'Fashion Photography From Professional',date:'21/12/19', ratings:5, price:'$70.99',comment:2},
    {title:'Fashion Photography From Professional',date:'21/12/19', ratings:5, price:'$70.99',comment:2},
    {title:'Fashion Photography From Professional',date:'21/12/19', ratings:5, price:'$70.99',comment:2},
  ]
  ngOnInit(): void {
  }

}
