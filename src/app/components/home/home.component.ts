import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/logger/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('Home Component');
  }
}
