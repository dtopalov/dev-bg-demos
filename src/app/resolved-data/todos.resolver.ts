import { Observable } from 'rxjs';
import { DataService } from './../data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class TodoResolve implements Resolve<any> {

  constructor(private dataService: DataService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.getRemoteData(route.paramMap.get('id'));
  }
}
