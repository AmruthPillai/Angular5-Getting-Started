import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => {
      this.id = res.id
    });
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
