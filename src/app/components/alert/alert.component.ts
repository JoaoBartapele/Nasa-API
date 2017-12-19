import { Component, OnInit } from '@angular/core';
import { AlertModel } from '../../models/alert-model';
import { AlertService } from '../../services/alert/alert.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
  }

  private deleteAlert(alert: AlertModel) {
    this.alertService.deleteAlert(alert);
  }

  private editAlert(alert: AlertModel) {
    this.alertService.editAlert(alert);
  }

  private clear(): void {
    localStorage.clear();
    this.alertService.alertsObs = this.alertService.getAllAlerts();
  }

}
