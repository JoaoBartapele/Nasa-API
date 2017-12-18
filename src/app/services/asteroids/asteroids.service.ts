import { Injectable } from '@angular/core';
import { HttpService, GET } from '../http/http.service';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class AsteroidsService {

  constructor(
    private httpService: HttpService
  ) { }

  public getAsteroides(param?: any) {
    console.log('pp', param);
    let a;
    if (param) a = param;
    else a = {
      'start_date' : moment(new Date()).subtract(4, 'days').format('YYYY-MM-D'),
      'end_date' : moment(new Date()).format('YYYY-MM-D')
    };
    console.log('asssssss', a);
    return this.httpService.req(GET, 'rest/v1/feed', a).map((response: Response) => response.json());
  }

}
