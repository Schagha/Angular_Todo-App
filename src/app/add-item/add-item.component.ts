import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  addItemForm: FormGroup;
  valid = true;

  constructor(private itemsService: ItemsService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addItemForm = this.formBuilder.group({
      title: '',
      description: undefined,
    });
  }

  onSubmit(itemData: { title: string; description?: string }): void {
    this.valid = true;
    if (itemData.title) {
      this.itemsService.addTodoItem(itemData.title, itemData.description);
      this.addItemForm.reset();
    } else {
      this.valid = false;
    }
  }
}
