import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IUser } from '../../../shared/models/iuser';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userCollection!: AngularFirestoreCollection<IUser>;

  constructor(
    private auth: AngularFireAuth,
    private firebaseDb: AngularFirestore
  ) {
    this.userCollection = firebaseDb.collection('user');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  async createNewUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('Password not provided!');
    }

    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email,
      userData.password
    );

    await this.userCollection.doc(userCred.user?.uid).set({
      name: userData.name,
      email: userData.email,
    });
  }

  async loginWithEmailAndPwd(email: string, password: string) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async loginWithGoogle() {
    return await this.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  async logout() {
    return await this.auth.signOut();
  }
}
