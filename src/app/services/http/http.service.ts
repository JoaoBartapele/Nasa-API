import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';


const URLAPI: string = 'https://api.nasa.gov/neo/';
const APIKEY: string = 'api_key=2hKjRWO84XXPqnffl8lPZW1WCXbSyQj8q5VDpECf';

export const GET = RequestMethod.Get;

@Injectable()
export class HttpService {

  constructor(
    private http: Http
  ) {}

  public req(method: RequestMethod, path: string, extras?: any): Observable<Response> {
    if (method === GET) {
      let str: string = '';
      // console.log('e', typeof(extras));
      for (let attr in extras) {
        if (extras.hasOwnProperty(attr)) {
          if (extras[attr] && typeof extras[attr] !== 'undefined') {
            // console.log('11', encodeURI(extras[attr]));
            str += '&' + attr + '=' + encodeURI(extras[attr]);
          }
        }
      }
      if (str.length > 0 ) {
        str = '?' + str.substr(1) + '&' +  APIKEY;
        // console.log(str);
      }
      path += str;
    }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      method: method,
      body: extras,
      headers: headers
    });
    return this.http.request(URLAPI + path , options).share();
  }

}
