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
  showRecordList = true;
  showFormList = false;
  showColorForRecord = true;
  showColorForForm = false;

  constructor(private dashBoardSer: DashboardService) { }

  ngOnInit(): void {
  }

  switchToTabs() {
    this.toggle = !this.toggle;
  }

  showRespectiveList(event) {
    if(event === 'Record') {
      this.showRecordList = true;
      this.showFormList = false;
      this.showColorForRecord = true;
      this.showColorForForm = false;
      this.toggle = false;
    } else if (event === 'Forms') {
      this.showFormList = true;
      this.showRecordList = false;
      this.showColorForForm = true;
      this.showColorForRecord = false;
    } else {
      this.showRecordList = false;
      this.showFormList = false;
    }
  }

}
