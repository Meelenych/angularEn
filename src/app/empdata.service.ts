import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  info1: string[] = ['John Mathew', 'E56632', 'jm@abc.com'];
  info2: string[] = ['Sarah Cleveland', 'E56642', 'sc@abc.com'];
  info3: string[] = ['Daniel Craig', 'E54432', 'dc@abc.com'];

  get1info(): string[] {
    return this.info1
  }

  get2info(): string[] {
    return this.info2
  }

  get3info(): string[] {
    return this.info3
  }

  addInfo(info: string) {
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }
  constructor() { }
}
