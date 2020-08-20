import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../shared/user.model';
import {AccountManagementService} from '../shared/services/account-management.service';

declare var M: any;

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  @ViewChild('dropdown', {static: true}) dropdown: ElementRef;
  users: User[];
  user: User;
  private userSubscription;

  constructor(private accountManagementService: AccountManagementService) { }

  ngOnInit() {
    this.accountManagementService.setUserObservable();
    this.userSubscription = this.accountManagementService.userObservable
      .subscribe((users) => {
        this.users = users.content;
        setTimeout( () => {
          const elems = document.querySelectorAll('select');
          M.FormSelect.init(elems);
        }, 0);
      });
  }

  changeUserPrivilege(target, user) {
    this.accountManagementService.changeUserPrivilege(user.id, target.value);
  }
}
