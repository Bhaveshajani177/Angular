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
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public imageCollection: AngularFirestoreCollection<IImage>;

  constructor(
    private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private angularFireStorage: AngularFireStorage
  ) {
    this.imageCollection = this.angularFirestore.collection('images');
  }

  // getImages(sort$: BehaviorSubject<string>) {
  //   return combineLatest([this.angularFireAuth.user, sort$]).pipe(
  //     switchMap((values) => {
  //       const [user, sort] = values;

  //       if (!user) {
  //         return of([]);
  //       }

  //       const query = this.imageCollection.ref
  //         .where('uid', '==', user.uid)
  //         .orderBy('timestamp', sort === '1' ? 'desc' : 'asc');

  //       return query.get();
  //     }),
  //     map((snapshot) => (snapshot as QuerySnapshot<IImage>).docs)
  //   );
  // }

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

  async deleteImage(image: IImage) {
    const clipRef = this.angularFireStorage.ref(`images/${image.fileName}`);
    await clipRef.delete();

    await this.imageCollection.doc(image.docID).delete();
  }
}
