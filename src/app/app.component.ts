import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  selectedTab = 'users'; // Default tab

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  constructor(
  ) {}

  ngOnInit(): void {
  }
}
