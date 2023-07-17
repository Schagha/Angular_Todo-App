import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

enum SortOrder {
  Unsorted,
  Ascending,
  Descending,
}

type SortingAttribute = 'title' | 'description' | 'status';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
})
export class ListHeaderComponent {
  private sortedByTitle: SortOrder = SortOrder.Unsorted;
  private sortedByDescription: SortOrder = SortOrder.Unsorted;
  private sortedByStatus: SortOrder = SortOrder.Unsorted;

  constructor(private itemsService: ItemsService) {}

  isSortedBy(attribute: SortingAttribute): boolean {
    switch (attribute) {
      case 'title':
        return this.sortedByTitle !== SortOrder.Unsorted;
      case 'description':
        return this.sortedByDescription !== SortOrder.Unsorted;
      case 'status':
        return this.sortedByStatus !== SortOrder.Unsorted;
    }
  }

  isSortedAscBy(attribute: SortingAttribute): boolean {
    switch (attribute) {
      case 'title':
        return this.sortedByTitle === SortOrder.Ascending;
      case 'description':
        return this.sortedByDescription === SortOrder.Ascending;
      case 'status':
        return this.sortedByStatus === SortOrder.Ascending;
    }
  }

  isSortedDescBy(attribute: SortingAttribute): boolean {
    switch (attribute) {
      case 'title':
        return this.sortedByTitle === SortOrder.Descending;
      case 'description':
        return this.sortedByDescription === SortOrder.Descending;
      case 'status':
        return this.sortedByStatus === SortOrder.Descending;
    }
  }

  sortItemsBy(attribute: SortingAttribute): void {
    let ascending = true;

    switch (attribute) {
      case 'title':
        ascending = this.sortedByTitle === SortOrder.Ascending;
        break;
      case 'description':
        ascending = this.sortedByDescription === SortOrder.Ascending;
        break;
      case 'status':
        ascending = this.sortedByStatus === SortOrder.Ascending;
        break;
    }

    this.itemsService.sortItems(ascending, attribute);

    this.sortedByTitle = SortOrder.Unsorted;
    this.sortedByDescription = SortOrder.Unsorted;
    this.sortedByStatus = SortOrder.Unsorted;
    const newStatus = ascending ? SortOrder.Descending : SortOrder.Ascending;
    switch (attribute) {
      case 'title':
        this.sortedByTitle = newStatus;
        break;
      case 'description':
        this.sortedByDescription = newStatus;
        break;
      case 'status':
        this.sortedByStatus = newStatus;
        break;
    }
  }
}
