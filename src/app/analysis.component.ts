import 'rxjs/add/operator/switchMap';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: [ './analysis.component.css' ]
})
export class AnalysisComponent {
  constructor(private router: Router) { }
}
