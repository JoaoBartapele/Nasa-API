import { Injectable } from '@angular/core';
import { HttpService, GET } from '../http/http.service';
import { Response } from '@angular/http';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AsteroidsService {

  constructor(
    private httpService: HttpService
  ) { }

  public getAsteroides(param?: any): Observable<any> {
    let a;
    if (param) a = param;
    else a = {
      'start_date' : moment(new Date()).subtract(4, 'days').format('YYYY-MM-D'),
      'end_date' : moment(new Date()).format('YYYY-MM-D')
    };
    return this.httpService.req(GET, 'rest/v1/feed', a).map((response: Response) => response.json()).share();
  }

  public getFastestAsteroids(): Observable<any> {
    return this.httpService.req(GET, 'rest/v1/feed',
      {
      'end_date' : moment(new Date()).subtract(6, 'days').format('YYYY-MM-D')
      }
    ).map((response: Response) => response.json());
  }

}
