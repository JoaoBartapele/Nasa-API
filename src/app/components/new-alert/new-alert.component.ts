import { Component, OnInit } from '@angular/core';
import { AlertModel } from '../../models/alert-model';
import { AlertService } from '../../services/alert/alert.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AlertInterface } from '../../interfaces/alert-interface';

@Component({
  selector: 'app-new-alert',
  templateUrl: './new-alert.component.html',
  styleUrls: ['./new-alert.component.css']
})
export class NewAlertComponent implements OnInit {

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  private submit(alert: AlertModel): void {
    this.alertService.addAlert(alert);
  }

  private edit(alert: AlertInterface): void {
    this.alertService.editAlert(alert);
  }

}
