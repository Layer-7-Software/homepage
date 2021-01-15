import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { Developer } from '../models';


@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.scss']
})
export class DevsComponent implements OnInit {

  developers: Developer[] = [
    {
      name: 'Adam Swanson',
      img: '/assets/img/crisp.jpg',
      primaryLink: 'https://adam.layerseven.net',
      links: [
        { href: 'https://adam.layerseven.net', icon: faGlobeAmericas },
        { href: 'https://blog.layerseven.net', icon: faPenSquare },
        { href: 'https://github.com/theaswanson', icon: faGithub },
        { href: 'https://twitter.com/crisp2020', icon: faTwitter },
        { href: 'https://linkedin.com/in/adam-swanson/', icon: faLinkedin },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
