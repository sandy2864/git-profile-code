import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  @Input() repos: any;
  @Input() page: any;
  @Input() totalRec: any;
  constructor() {}

  ngOnInit(): void {}
}
