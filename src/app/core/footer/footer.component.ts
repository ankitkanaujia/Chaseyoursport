import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/logger/logger.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('Footer');
  }
}
