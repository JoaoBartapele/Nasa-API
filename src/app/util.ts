import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ViewModel } from './models/view-model';

export class Util {
  public static formatDate(date: NgbDateStruct ) {
      let dateFormat = date.year.toString() + '-' + date.month.toString() + '-' + date.day.toString();
      return dateFormat;
  }

  public static dataToModel(data: any): ViewModel[] {
    let out: ViewModel[] = [];
    for (let attr in data) {
      if (data.hasOwnProperty(attr)) {
        data[attr].forEach((el) => {
          let a = new ViewModel(
            el.name,
            attr,
            el.close_approach_data[0].relative_velocity.kilometers_per_hour,
            el.is_potentially_hazardous_asteroid
          );
          out.push(a);
        });
      }
    }
    return out;
  }
}
