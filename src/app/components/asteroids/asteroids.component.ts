import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { AsteroidsService } from '../../services/asteroids/asteroids.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { Util } from '../../util';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import * as moment from 'moment';
import { ValidatorFn } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class AsteroidsComponent implements OnInit {

  private asteroides: any[] = [];
  private formBusca: FormGroup;

  constructor(
    private astService: AsteroidsService,
    private fb:  FormBuilder
  ) {
  }

  ngOnInit() {
    this.formBusca = this.fb.group({
      start_date: new FormControl(''),
      end_date: new FormControl(''),
      detailed: new FormControl(false)
    }, { validator: this.testDates()});

    this.astService.getAsteroides().subscribe((busca: Busca) => {
      this.asteroides = Util.dataToModel(busca.near_earth_objects);
      this.asteroides = this.sortByDate(this.asteroides);
    });
  }

  searchByDate(form: any): void {
    form.start_date = Util.formatDate(form.start_date);
    form.end_date = Util.formatDate(form.end_date);
    this.asteroides = [];
    this.astService.getAsteroides(form).subscribe((busca: Busca) => {
      this.asteroides = Util.dataToModel(busca.near_earth_objects);
      this.asteroides = this.sortByDate(this.asteroides);
    });
  }

  private sortByDate(array: Array<any>): Array<any> {
    return array.sort((a, b) => {
      return +new Date(a.date) - +new Date(b.date);
    }).reverse();
  }

  private testDates(): ValidatorFn {
    return (g: FormGroup): { [key: string]: boolean } => {
      let start = g.get('start_date').value;
      let end = g.get('end_date').value;
      if (!start || !end) return null;
      start = new Date(start.month + '-' + start.day + '-' + start.year);
      end = new Date(end.month + '-' + end.day + '-' + end.year);
      let res = (end - start) / (24 * 60 * 60 * 1000);
      return res <= 7 ? null : { invalidDate: true };
    };
  }

}
