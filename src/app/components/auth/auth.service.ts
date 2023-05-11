import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  // ...
  public isLoggedIn(): boolean {
    return localStorage.getItem('authenticated') !== null;
  }

  public asyncIsLoggedIn(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(localStorage.getItem('authenticated') !== null);
      }, 300);
    });
  }
}
