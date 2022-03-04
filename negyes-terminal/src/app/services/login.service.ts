import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loggedInUser: BehaviorSubject<User|undefined> = new BehaviorSubject<User|undefined>(undefined) ;
  private readonly USER_URL: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }


  public setLoggedInUser(user: User): void {
    this._loggedInUser.next(user);
  }

  get loggedInUser(): Subject<User|undefined> {
    return this._loggedInUser;
  }

  public logout(): void{
    this._loggedInUser.next(undefined);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.USER_URL);
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.USER_URL}/${id}`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.USER_URL, user);
  }
}
