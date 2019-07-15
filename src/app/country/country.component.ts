import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Country } from '../countries';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  selectedCountry: Country;
  kk: Country;
  g: any;
  gkeys: any;
  _countries: Array<Country>;
  _regions: any;
  _rk: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v1/all').subscribe((data: Array<Country>) => {
      this._countries = data;

      const groupBy = (items, key) => items.reduce((result, item) => ({
          ...result, [item[key]]: [
              ...(result[item[key]] || []),
              item,
          ]
      }), {}, );
      this._regions = groupBy(this._countries, 'region');
      this._rk = Object.entries(this._regions);

      console.log(groupBy(this._countries, 'region'));
      this.g = groupBy(this._countries, 'region');
      console.log(Object.keys(this.g), '-region', Object.entries(this.g));
      this.gkeys = Object.entries(this.g);

    });
  }

  onSelect(c: Country): void {
    this.selectedCountry = c;
    this.kk = c;
  }

}
