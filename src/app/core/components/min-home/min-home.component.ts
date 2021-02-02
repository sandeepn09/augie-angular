import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-home',
  templateUrl: './min-home.component.html',
  styleUrls: ['./min-home.component.css']
})
export class MinHomeComponent implements OnInit {

  addclass: string;
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Router activation
   */
  onActivate(componentReference: any) {
    this.addclass = componentReference.navClass;
  }

}
