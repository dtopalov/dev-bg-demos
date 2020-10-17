import { DataService } from './../data.service';
// tslint:disable: prefer-for-of
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.component.html',
  styleUrls: ['./rendering.component.css']
})
export class RenderingComponent {
    @ViewChild('itemsContainer', { read: ViewContainerRef }) container: ViewContainerRef;
    @ViewChild('item', { read: TemplateRef }) template: TemplateRef<any>;

    public items = [{
        id: 1,
        text: 'foo'
      }, {
        id: 2,
        text: 'bar'
      }];

    public data: any[] = this.dataService.data;
    public tableData: any[] = [];

    public trackItemById = (idx, item) => item.id;

    constructor(private dataService: DataService) { }

    public createItems(): void {
      this.tableData = this.data;
    }

    public renderManually(): void {
        for (let n = 0; n < this.data.length; n++) {
            this.container.createEmbeddedView(this.template, { dataItem: this.data[n] });
        }
    }

    public renderProgressively(): void {
        const ITEMS_RENDERED_AT_ONCE = 500;
        const INTERVAL_IN_MS = 10;

        let currentIndex = 0;

        const interval = setInterval(() => {
            const nextIndex = currentIndex + ITEMS_RENDERED_AT_ONCE;

            for (let n = currentIndex; n < nextIndex ; n++) {
                if (n >= this.data.length) {
                    clearInterval(interval);
                    break;
                }

                const context = {
                    dataItem: this.data[n]
                };

                this.container.createEmbeddedView(this.template, context);
            }

            currentIndex += ITEMS_RENDERED_AT_ONCE;
        }, INTERVAL_IN_MS);
    }

    public clearManually(): void {
        this.container.clear();
    }

    public clearItems(): void {
        this.tableData = [];
    }

    public add(): void {
        const newItems = [];
        for (const item of this.items) {
          newItems.push({
            id: item.id,
            text: item.text
          });
        }

        newItems.push({
          id: this.items.length + 1,
          text: `NEW`
        });

        this.items = newItems;
    }
}
