import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  @Output() brandFilter = new EventEmitter<string>();

  brands: Brand[] = [];
  dataLoaded = false;
  currentBrand: Brand;
  nullBrand: Brand;
  filterText = '';
  selectedBrand: string;
  null: any;
  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
    console.log(this.brands);
  }
  setBrand(value: string) {
    this.brandFilter.emit(value);
  }
}
