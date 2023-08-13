import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Output() colorFilter = new EventEmitter<string>();

  colors: Color[] = [];
  dataLoaded = false;
  currentColor: Color;
  nullColor: Color;
  filterText: '';
  colorName = 'All colors';
  selectedColor: string;
  null: any;
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }
  submit() {
    console.log('Form Submitted');
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }
  setColor(value: string) {
    this.colorFilter.emit(value);
  }
}
