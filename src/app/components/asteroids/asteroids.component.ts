import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { AsteroidsService } from '../../services/asteroids/asteroids.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { Util } from '../../util';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import * as moment from 'moment';

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
    });

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

}
