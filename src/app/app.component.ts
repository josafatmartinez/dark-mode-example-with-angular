import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .header {
      padding: 1rem;
      text-align: center;
      letter-spacing: -0.2rem;
      font-size: 32px;
    }

    main {
      padding: 1.5rem;
      flex-grow: 1;
    }
    .footer {
      padding: 1rem;
      background: var(--background-color);
      border-top: 1px solid var(--border-color);
      text-align: center;
    }
    .text-center {
      text-align: center;
    }

    .padding {
      padding: 1.5rem;
    }
    .link {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: bold;
    }
    .link:hover {
      color: var(--button-text-color);
      background: var(--primary-color-hover);
    }
    .button {
      background: var(--primary-color);
      color: var(--button-text-color);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 1.25rem;
      width: 10%;
      min-width: 150px;
      min-height: 50px;
      cursor: pointer;
    }
    .center-item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button:hover {
      color: var(--button-text-color);
      background: var(--primary-color-hover);
    }

  `]
})
export class AppComponent implements OnInit{

  buttonText: undefined | string;
  date: Date = new Date();
  darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.toggleDarkModeAutomatic(this.darkModeMediaQuery.matches);
    this.darkModeMediaQuery.addEventListener('change', (e) => {
      this.toggleDarkModeAutomatic(e.matches);
    });
  }

  toggleDarkMode() {
    this.appService.toggleButton();
    this.buttonText = this.appService.isToogled ? 'Toggle Light Mode 🌕' : 'Toggle Dark Mode 🌑';
    document.documentElement.setAttribute('data-theme', this.appService.isToogled ? 'dark' : 'light');
  }

  toggleDarkModeAutomatic(enabled: boolean): void {
    document.documentElement.setAttribute('data-theme', enabled ? 'dark' : 'light');
  }

}
