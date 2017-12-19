import { AlertModel } from '../models/alert-model';

export interface AlertInterface {
  date: string | Date;
  alert: AlertModel;
}
