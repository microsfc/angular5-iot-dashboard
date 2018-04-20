import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-search',
  templateUrl: './nav-bar-search.component.html',
  styleUrls: ['./nav-bar-search.component.scss']
})
export class NavBarSearchComponent implements OnInit {
  public isRequesting = false;
  constructor() { }

  ngOnInit() {
  }

  public BeginSearch () {
    this.isRequesting = true;
  }

}
