import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/core/services/canonical.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  products = [
    {
      code: 'jhsh',
      name: 'afbjbf',
      category: 'jkbfwejbfjw',
      quantity: 'jbfjewbf'
    }
  ];
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Login Page'); // Set the page title
    this.canonicalService.setCanonicalURL(
      'https://www.chaseyoursport.com/login'
    );
    // Add a meta keyword tag (you can also set other meta tags in a similar way)
    this.metaService.addTag({
      name: 'keywords',
      content: 'login, angular, yourKeywords'
    });
  }
}
