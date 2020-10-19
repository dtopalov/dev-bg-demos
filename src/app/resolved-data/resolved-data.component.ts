import { DataService } from './../data.service';
// tslint:disable: no-console
// tslint:disable: no-string-literal
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolved-data',
  templateUrl: './resolved-data.component.html',
  styleUrls: ['./resolved-data.component.css']
})
export class ResolvedDataComponent implements OnInit {
  public data: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    console.log('ResolvedData component initialized');
    console.time('data');
    this.data = this.dataService.getRemoteData(this.route.snapshot.paramMap.get('id')).subscribe(r => this.data = r);
    // console.timeEnd('data');
    // this.data = this.route.snapshot.data['todo'];
  }

}
