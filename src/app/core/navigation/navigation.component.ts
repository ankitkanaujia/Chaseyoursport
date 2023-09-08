import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/logger/logger.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  text: string = '';
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.log('navigation');
  }
}
