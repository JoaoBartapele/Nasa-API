import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Util {
  public static formatDate(date: NgbDateStruct ) {
      let dateFormat = date.year.toString() + '-' + date.month.toString() + '-' + date.day.toString();
      console.log(dateFormat);
      return dateFormat;
  }
}
