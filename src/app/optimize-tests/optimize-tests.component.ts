import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optimize-tests',
  templateUrl: './optimize-tests.component.html',
  styleUrls: ['./optimize-tests.component.css']
})
export class OptimizeTestsComponent implements OnInit {
  public id: number;

  constructor() { }

  ngOnInit(): void {
    this.id = 1;
  }

}
