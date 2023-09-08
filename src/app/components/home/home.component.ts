import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/logger/logger.service';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/core/services/canonical.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private loggerService: LoggerService,
    private titleService: Title,
    private metaService: Meta,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    this.loggerService.log('Home Component');
    this.titleService.setTitle('Home Page'); // Set the page title
    this.canonicalService.setCanonicalURL('https://www.chaseyoursport.com/');
    // Add a meta keyword tag (you can also set other meta tags in a similar way)
    this.metaService.addTag({
      name: 'keywords',
      content: 'login, angular, yourKeywords'
    });
  }
}
