import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

import { CharacterFrequencies, countCharacters } from '../../tasks/countCharacters';
import { TodoListItem } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss'],
})
export class HistogramComponent implements OnInit {
  data: CharacterFrequencies;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.data = {
      // a: { upperCase: 0, lowerCase: 3 },
      // b: { upperCase: 2, lowerCase: 5 },
      // c: { upperCase: 8, lowerCase: 7 },
    };

    this.itemsService.getItems().forEach((item) => this.calculateData(item));
    this.itemsService.todoListChanged.subscribe((items) => {
      const lastItem = items[items.length - 1];
      this.calculateData(lastItem);
    });
  }

  calculateData(item: TodoListItem) {
    this.data = countCharacters(item, this.data);
  }

  dataLength(): number {
    return Object.keys(this.data).length;
  }
}
