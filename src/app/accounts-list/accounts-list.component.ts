// import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// import {User} from '../shared/user.model';
// import {AccountManagementService} from '../shared/services/account-management.service';
// import {MatTableDataSource, MatSort} from '@angular/material/';
//
// // declare var M: any;
//
// @Component({
//   selector: 'app-accounts-list',
//   templateUrl: './accounts-list.component.html',
//   styleUrls: ['./accounts-list.component.css']
// })
// export class AccountsListComponent implements OnInit {
//   @ViewChild('dropdown', {static: true}) dropdown: ElementRef;
//   // users: User[];
//   users = new MatTableDataSource<User>();
//   displayColumns: string[] = ['email', 'name', 'general practice', 'change privilege', 'change position'];
//   user: User;
//   private userSubscription;
//
//   constructor(private accountManagementService: AccountManagementService) { }
//
//   ngOnInit() {
//     this.accountManagementService.setUserObservable();
//     this.userSubscription = this.accountManagementService.userObservable
//       .subscribe((users) => {
//         this.users.data = users.content;
//         // setTimeout( () => {
//         //   const elems = document.querySelectorAll('select');
//         //   M.FormSelect.init(elems);
//         // }, 0);
//       });
//   }
//
//   changeUserPrivilege(target, user) {
//     this.accountManagementService.changeUserPrivilege(user.id, target.value);
//   }
//
//   changeUserPosition(target, user) {
//     this.accountManagementService.setUserPosition(user.id, target.value);
//   }
// }
