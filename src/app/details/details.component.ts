import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../countries';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() selectedCountry: Country;
  constructor() { }

  ngOnInit() {
  }

}
