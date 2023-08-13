import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  companyName = 'Araç Kirala';
  mailAddress = 'info@muratatalik.com';
  constructor() {}

  ngOnInit(): void {}
}
