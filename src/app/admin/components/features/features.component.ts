import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  public features: string[] = [];

  constructor( private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { features: string[] }) => {
        this.features = data.features || [];
      });
  }

}
