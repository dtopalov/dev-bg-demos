import { Injectable } from '@angular/core';
import { Observable, of, timer  } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { PreloadingStrategy, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, loadMe: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      const delay: number = route.data.delay;

      console.log(`preload called on ${route.path} with a delay of ${delay}`);

      return timer(delay).pipe(
        mergeMap(_ => {
          console.log(`Loading ${route.path} after ${delay}`);

          return loadMe() ;
        }));
    } else {
      console.log(`No preloading for ${route.path}`);

      return of(null);
    }
  }
}
