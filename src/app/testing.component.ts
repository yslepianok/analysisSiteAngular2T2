import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: [ './testing.component.css' ]
})
export class TestingComponent{
  constructor(private router: Router) { }
}
