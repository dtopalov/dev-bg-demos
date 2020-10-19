import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: any[] = this.createRandomData(10000);

  constructor(private http: HttpClient) {}

  public getRemoteData(id?: string): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id ? id : ''}`)
      .pipe(
        delay(1000),
        tap(() => {
          console.log(`data resolved`);
          // console.time('data');
          console.timeEnd('data');
        })
      );
  }

  private createRandomData(count: number): any[] {
    // tslint:disable-next-line: one-variable-per-declaration
    const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Nige'],
          lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth', 'White'],
          cities = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'Philadelphia', 'New York', 'Seattle', 'London', 'Boston'],
          titles = ['Accountant', 'Vice President, Sales', 'Sales Representative', 'Technical Support', 'Sales Manager', 'Web Designer',
              'Software Developer'];

    return Array(count).fill({}).map((_, idx) => ({
        id: idx + 1,
        firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        title: titles[Math.floor(Math.random() * titles.length)]
    }));
  }
}
