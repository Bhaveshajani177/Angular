import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { IStudent } from '../core/models/istudent';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private studentCollection: AngularFirestoreCollection<IStudent>;
  public isAuthenticated$!: Observable<boolean>;

  constructor(
    private auth: AngularFireAuth,
    private firebaseDb: AngularFirestore
  ) {
    this.studentCollection = firebaseDb.collection('students');
    this.isAuthenticated$ = auth.user.pipe(map((user) => !!user));
  }

  // create new student
  public async createUser(studentData: IStudent) {
    if (!studentData.passwords) {
      throw new Error('Password not provided!');
    }

    const studentCred = await this.auth.createUserWithEmailAndPassword(
      studentData.email,
      studentData.passwords.password
    );

    // await this.firebaseDb.collection<IStudent>('students').add({
    await this.studentCollection.doc(studentCred.user?.uid).set({
      name: studentData.name,
      email: studentData.email,
      phone: studentData.phone,
      gender: studentData.gender,
    });

    await studentCred.user?.updateProfile({
      displayName: studentData.name,
    });
  }
}
