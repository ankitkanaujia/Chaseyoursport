import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {
  constructor(
    private meta: Meta,
    @Inject(DOCUMENT) private dom: Document
  ) {}

  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URL : url;
    const existingTag = this.meta.getTag('rel="canonical"');

    if (existingTag && existingTag instanceof HTMLLinkElement) {
      existingTag.setAttribute('href', canURL);
    } else {
      const link = this.dom.createElement('link') as HTMLLinkElement;
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canURL);
      this.dom.head.appendChild(link);
    }
  }
}
