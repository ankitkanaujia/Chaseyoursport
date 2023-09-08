import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: any, ...optionalParams: any[]) {
    if (environment.enableLogging) {
      console.log(message, ...optionalParams);
    }
  }

  error(message: any, ...optionalParams: any[]) {
    if (environment.enableLogging) {
      console.error(message, ...optionalParams);
    }
  }
}
