import { DataService } from './../data.service';
import { Component, ElementRef, NgZone, Renderer2, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pipes',
  template: `
    <input [(ngModel)]="value" #input /> {{value}}<br />
    <button #button (click)="onClick()">Test</button>
    <table>
      <tr *ngFor="let item of items">
        <td>{{ item.id }}</td>
        <td>{{ item.firstName }}</td>
        <td>{{ item.lastName }}</td>
        <td>{{ item.city }}</td>
        <td>{{ item.title }}</td>
        <td>{{ calculatedValue(item.id) }}</td>
      </tr>
    </table>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})

export class PipesComponent implements AfterViewInit, OnDestroy {
    @ViewChild('button') private button: ElementRef;
    @ViewChild('input') private input: ElementRef;
    public items: any[] = this.dataService.data.slice(0, 100);
    public value: string;

    private subs: Subscription = new Subscription();

    constructor(
      private dataService: DataService,
      private ngZone: NgZone,
      private cdr: ChangeDetectorRef,
      private renderer: Renderer2) { }

    public calculatedValue(id: number): string {
      console.count('calculate value');
      return id.toFixed(3);
    }

    public ngAfterViewInit(): void {
      // this.ngZone.runOutsideAngular(() => {
      //   this.subs.add(this.renderer.listen(this.button.nativeElement, 'click', this.onClick));
      //   this.subs.add(this.renderer.listen(this.input.nativeElement, 'input', this.onInput));
      // });
    }

    public onClick(): void {
      console.log('clicked');
    }

    public onInput = (e) => {
      if (e.target.value.length % 3 === 0) {
        this.ngZone.run(() => this.value = e.target.value);
        this.cdr.detectChanges();
      }
    }

    public ngOnDestroy(): void {
      this.subs.unsubscribe();
    }
}
