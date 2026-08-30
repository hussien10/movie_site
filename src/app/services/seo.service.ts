import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const SITE_NAME = 'Noxe';
const SITE_URL = 'https://movie-site-rho-lime.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/title-image-1.webp`;

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private _title: Title, private _meta: Meta) { }

  update(data: SeoData): void {
    const fullTitle = data.title ? `${data.title} | ${SITE_NAME}` : `${SITE_NAME} — Watch Movies, TV Shows & Discover Actors`;
    const description = data.description || 'Noxe lets you browse trending movies and TV shows, explore actor profiles, and build your own watchlist.';
    const image = data.image || DEFAULT_IMAGE;
    const url = data.url ? `${SITE_URL}${data.url}` : SITE_URL;

    this._title.setTitle(fullTitle);

    this._meta.updateTag({ name: 'description', content: description });

    // Open Graph
    this._meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this._meta.updateTag({ property: 'og:title', content: fullTitle });
    this._meta.updateTag({ property: 'og:description', content: description });
    this._meta.updateTag({ property: 'og:image', content: image });
    this._meta.updateTag({ property: 'og:url', content: url });
    this._meta.updateTag({ property: 'og:type', content: data.type || 'website' });

    // Twitter Card
    this._meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this._meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this._meta.updateTag({ name: 'twitter:description', content: description });
    this._meta.updateTag({ name: 'twitter:image', content: image });

    // Canonical
    this.updateCanonicalUrl(url);
  }

  private updateCanonicalUrl(url: string): void {
    const head = document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = document.querySelector(`link[rel='canonical']`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'canonical');
      head.appendChild(element);
    }
    element.setAttribute('href', url);
  }
}
