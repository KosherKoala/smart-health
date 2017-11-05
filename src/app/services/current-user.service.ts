import { Injectable } from '@angular/core';

@Injectable()
export class CurrentUserService {

  public currentUser = {history: ['']};

  constructor() { }

}
