import { Component, OnInit } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  SelectedLeader:Leader;
  leaders:Leader[];
  constructor(private LeaderService:LeaderService) { }
  
  ngOnInit(): void {
    this.LeaderService.getLeaders()
    .subscribe((leaders)=>this.leaders=leaders);
  }

}
