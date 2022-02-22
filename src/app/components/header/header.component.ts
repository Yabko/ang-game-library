import { Component, OnInit } from '@angular/core';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  faSteam = faSteam;
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
