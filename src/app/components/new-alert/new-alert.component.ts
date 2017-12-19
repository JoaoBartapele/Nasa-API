import { Component, OnInit } from '@angular/core';
import { AlertModel } from '../../models/alert-model';
import { AlertService } from '../../services/alert/alert.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AlertInterface } from '../../interfaces/alert-interface';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-new-alert',
  templateUrl: './new-alert.component.html',
  styleUrls: ['./new-alert.component.css']
})
export class NewAlertComponent implements OnInit {

  private formNew: FormGroup;

  constructor(
    private alertService: AlertService,
    private fb: FormBuilder;
  ) { }

  ngOnInit() {
    this.formNew = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/\w+\@\w+\.\w+(\.?\w+)/)])),
      velocity: new FormControl('', Validators.required)
    });
  }

  private submit(alert: AlertModel): void {
    this.alertService.addAlert(alert);
    this.formNew.reset();
  }

  private edit(alert: AlertInterface): void {
    this.alertService.editAlert(alert);
    this.formNew.reset();
  }

}
