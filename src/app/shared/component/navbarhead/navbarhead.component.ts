import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarhead',
  templateUrl: './navbarhead.component.html',
  styleUrls: ['./navbarhead.component.scss'],
})
export class NavbarheadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  selectedLanguage = 'English';
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.dropdownOpen = false;
  }
}
