import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {User} from '../user.model';
import {ApiService} from './api.service';

@Injectable()
export class AccountManagementService {
  users: User[] = [];
  user: User;
  userObservable;
  PREFIX = 'users';

  constructor(private apiService: ApiService) {
  }

  setUserObservable() {
    this.userObservable = Observable.create(observer => {
      this.getUserObservable(observer);
    });
  }

  private getUserObservable(observer) {
    this.apiService.get({
      endPoint: `/${this.PREFIX}`, body: new HttpParams().set('Access-Control-Allow-Origin', '*')
    }).subscribe((users: User[]) => {
      this.users = users;
      observer.next(users);
    });
  }

  getUserAccount(userId: number): Observable<any> {
    return Observable.create(observer => {
      this.apiService.get({
        endPoint: `/${this.PREFIX}/` + userId
      }).subscribe((responseData) => {
        observer.next(responseData);
      });
    });
  }

  changeUserPrivilege(userId: number, userPrivilege: number) {
    this.apiService.postJSON({
      endPoint: `/${this.PREFIX}/privilege/` + userId,
    }, JSON.stringify( { privilege: userPrivilege} ))
      .subscribe((responseData: User) => {
      });
  }
}
