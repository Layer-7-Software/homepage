import { Component, OnInit } from '@angular/core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faGithub = faGithub;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
