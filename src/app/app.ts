import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Cocktails } from "./components/cocktails/cocktails";

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Cocktails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-cocktails');
}
