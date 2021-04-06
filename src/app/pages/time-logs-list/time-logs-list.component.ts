import { Component, OnInit } from '@angular/core';
import { TimeLogService } from 'src/app/services/time-log.service';
import { TimeLog } from 'src/app/common/time-log';


@Component({
  selector: 'app-time-logs-list',
  templateUrl: './time-logs-list.component.html',
  styleUrls: ['./time-logs-list.component.css']
})
export class TimeLogsListComponent implements OnInit {

  
  timelogs: TimeLog[];

  constructor(private timeLogService: TimeLogService) { }

  ngOnInit() {
    this.listTimeLogs();
  }

  listTimeLogs() {
    this.timeLogService.getTimeLogList().subscribe(
      data => {
        this.timelogs = data;
      }
    )
  }

}
