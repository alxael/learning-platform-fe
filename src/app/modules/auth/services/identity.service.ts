import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { UserProfileDto } from '../../api/models';
import { ProfileService } from '../../api/services';

@Injectable({ providedIn: 'root' })
export default class IdentityService {
  token = new BehaviorSubject<string | null>(null);
  profileData = new BehaviorSubject<UserProfileDto | null>(null);

  constructor(private profileService: ProfileService) {}

  refreshToken = () => {
    this.token.next(localStorage.getItem('token'));
  };

  refreshProfileData = () => {
    this.profileService.apiProfileGet$Json().subscribe((value) => {
      this.profileData.next(value);
    });
  };

  addProfileData = (data: UserProfileDto) => {
    this.profileData.next(data);
  }

  removeProfileData = () => {
    this.profileData.next(null);
  }

  addToken = (token: string) => {
    localStorage.setItem('token', token);
    this.token.next(token);
  };

  removeToken = () => {
    localStorage.removeItem('token');
    this.token.next(null);
  };
}
