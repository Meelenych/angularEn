import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service'

@Component({
  selector: 'app-einfo',
  templateUrl: './einfo.component.html',
  styleUrls: ['./einfo.component.css'],
  providers: [EmpdataService]
})
export class EinfoComponent implements OnInit {

  infoReceived1: string[] = []
  infoReceived2: string[] = []
  infoReceived3: string[] = []

  getInfo1fromService() {
    this.infoReceived1 = this.dservice.get1info()
  }
  getInfo2fromService() {
    this.infoReceived2 = this.dservice.get2info()
  }
  getInfo3fromService() {
    this.infoReceived3 = this.dservice.get3info()
  }

  constructor(private dservice: EmpdataService) { }

  ngOnInit(): void {
  }


  updateInfo(frm: any) {
    this.dservice.addInfo(frm.value.location)
  }

}
