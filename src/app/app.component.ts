import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { TestingComponent }      from './testing.component';
import { AnalysisComponent }  from './analysis.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
      private location: Location
    ) {}

  title = 'app works!';

  goAnalysis(name): void {
    console.log(name);
    this.location.go('/analysis');
  }

  goTesting(name): void {
    console.log(name);
    this.location.go('/testing');
  }
}
