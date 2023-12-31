import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { UserProfileDto } from '../../api/models';
import { ProfileService } from '../../api/services';

@Injectable({ providedIn: 'root' })
export default class IdentityService {
  token = new BehaviorSubject<string | null>(null);
  
  constructor() {}

  refreshToken = () => {
    this.token.next(localStorage.getItem('token'));
  };

  addToken = (token: string) => {
    localStorage.setItem('token', token);
    this.token.next(token);
  };

  removeToken = () => {
    localStorage.removeItem('token');
    this.token.next(null);
  };
}
