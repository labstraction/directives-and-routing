import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  if (authServ.isAuth) {
    console.log('sei il benvenuto!')
    return true;
  } else {
    console.log('TU NON PUOI PASSARE!')
    return false;
  }
};
