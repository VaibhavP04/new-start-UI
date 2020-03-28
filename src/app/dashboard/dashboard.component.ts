import { Component, OnInit } from '@angular/core';
import { faQuestionCircle, faExclamationCircle, faSignOutAlt, faFolderOpen, faSave, faTimes, faPlayCircle,
  faSyncAlt, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;
  faExclamationCircle = faExclamationCircle;
  faSignOutAlt = faSignOutAlt;
  faFolderOpen = faFolderOpen;
  faSave = faSave;
  faTimes = faTimes;
  faPlayCircle = faPlayCircle;
  faSyncAlt = faSyncAlt;
  faArrowDown = faArrowDown;

  toggle = false;

  constructor(private dashBoardSer: DashboardService) { }

  ngOnInit(): void {
  }

  switchToTabs() {
    this.toggle = !this.toggle;
  }

}
