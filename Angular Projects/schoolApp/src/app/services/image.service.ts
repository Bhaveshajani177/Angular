import { Injectable } from '@angular/core';
import IImage from '../core/models/iimage.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  QuerySnapshot,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public imageCollection: AngularFirestoreCollection<IImage>;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth
  ) {
    this.imageCollection = this.angularFirestore.collection('images');
  }

  getImages() {
    return this.angularFireAuth.user.pipe(
      switchMap((user) => {
        if (!user) {
          return of([]);
        }

        const query = this.imageCollection.ref.where('uid', '==', user.uid);

        return query.get();
      }),
      map((snapshot) => (snapshot as QuerySnapshot<IImage>).docs)
    );
  }

  createImage(data: IImage): Promise<DocumentReference<IImage>> {
    return this.imageCollection.add(data);
  }

  updateImage(id: string, title: string) {
    return this.imageCollection.doc(id).update({ title });
  }
}
