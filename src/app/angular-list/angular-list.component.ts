import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { AngularService } from '../services/angular.service';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.scss']
})
export class AngularListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(private AngularService: AngularService) { }

  ngOnInit(): void {
    this.faceSnaps = this.AngularService.getAllFaceSnap();
  }
}
