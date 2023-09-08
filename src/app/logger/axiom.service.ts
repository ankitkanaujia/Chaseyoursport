import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AxiomService {
  private axiomUrl =
    'https://cloud.axiom.co/api/v1/datasets/chaseyoursport-frontend/ingest';
  private axiomToken = 'xaat-3cfcfb74-1f91-4020-b1fb-81776fac56b6';

  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) {}

  log(level: string, message: string, additionalData: any): void {
    const headers = { Authorization: `Bearer ${this.axiomToken}` };
    const body = [
      {
        timestamp: new Date().toISOString(),
        level,
        message,
        route: window.location.pathname,
        userAgent: window.navigator.userAgent,
        platform: window.navigator.platform,
        language: window.navigator.language,
        additionalData
      }
    ];

    this.http.post(this.axiomUrl, body, { headers }).subscribe(
      (response) => this.logger.log('Log sent to Axiom', response),
      (error) => this.logger.error('Error sending log to Axiom', error)
    );
  }
}
