import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

public cateforiesList=[
  {title:'Design',courses:'Over 8 courses', symbol:'fas fa-camera', image:'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60'},
  {title:'Design',courses:'Over 8 courses', symbol:'fas fa-camera', image:'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60'},
  {title:'Design',courses:'Over 8 courses', symbol:'fas fa-camera', image:'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60'},
  {title:'Design',courses:'Over 8 courses', symbol:'fas fa-camera', image:'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHw%3D&auto=format&fit=crop&w=600&q=60'},
]

  ngOnInit(): void {
  }

}
