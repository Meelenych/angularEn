import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ['Adam Taylor', 'E2536', 'at@abc.net'];
  info2: string[] = ['Sandra Carisma', 'E2524', 'sc@abc.net'];
  info3: string[] = ['Michael Backer','E2576', 'mb@abc.net' ];

  getInfo1(): string[] {
    return this.info1
  }
   getInfo2(): string[] {
    return this.info2
   }
   getInfo3(): string[] {
    return this.info3
  }

  constructor() { }
}
