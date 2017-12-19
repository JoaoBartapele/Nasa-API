import { Injectable } from '@angular/core';
import { AlertModel } from '../../models/alert-model';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';


@Injectable()
export class AlertService {

  private newAlert: AlertModel = new AlertModel(null, null, null, null);
  private edit: boolean = false;
  private index: number;
  public alertsObs: Observable<AlertModel[]>;

  private save: any[];

  private _tbAlert: any = localStorage.getItem('tbAlert');

  constructor() {
    if (localStorage.getItem('tbAlert') === null) {
      localStorage['tbAlert'] = [];
    }
    if (this._tbAlert !== '') this._tbAlert = JSON.parse(this._tbAlert);
    this.alertsObs = this.getAllAlerts();
  }

  public addAlert(alert: AlertModel): boolean {
    alert.date = new Date().toLocaleDateString();
    let send = JSON.stringify({
      'date': alert.date,
      'name': alert.name,
      'email': alert.email,
      'velocity': alert.velocity
    });
    if (this._tbAlert === '' || this._tbAlert === null) {
      let a = [];
      a.push(send);
      localStorage.setItem('tbAlert', JSON.stringify(a));
      this._tbAlert = JSON.parse(localStorage['tbAlert']);
      this.alertsObs = this.getAllAlerts();
      this.newAlert  = new AlertModel(null, null, null, null);
      return true;
    }
    (<any>this._tbAlert).push(send);
    localStorage.setItem('tbAlert', JSON.stringify(this._tbAlert));
    this.alertsObs = this.getAllAlerts();
    this.newAlert  = new AlertModel(null, null, null, null);
    return true;
  }

  public deleteAlert(alert: AlertModel) {
    this._tbAlert.splice(this.index, 1);
    localStorage.setItem('tbAlert', JSON.stringify(this._tbAlert));
    this.alertsObs = this.getAllAlerts();
  }

  public editAlert(alert: any, save?: boolean): any {
    if (!this.edit) {
      this.index = this._tbAlert.indexOf(JSON.stringify(alert));
      this.newAlert = new AlertModel(
        alert.date,
        alert.name,
        alert.email,
        alert.velocity
      );
      this.edit = true;
    } else {
      let add = JSON.stringify({
        'date': alert.date,
        'name': alert.name,
        'email': alert.email,
        'velocity': alert.velocity
      });
      this._tbAlert[this.index] = add;
      localStorage.setItem('tbAlert', JSON.stringify(this._tbAlert));
      this.alertsObs = this.getAllAlerts();
      this.newAlert  = new AlertModel(null, null, null, null);
      this.edit = false;
    }
  }

  public getAllAlerts(): Observable<any> {
    let alerts = [];
    for (let i in this._tbAlert) {
      if (this._tbAlert.hasOwnProperty(i)) {
        alerts.push(JSON.parse(this._tbAlert[i]));
      }
    }
    return Observable.of(alerts);
  }
}
