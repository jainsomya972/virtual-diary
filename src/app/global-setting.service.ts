import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalSettingService {

  constructor() { }

  isAuth = false;
}
