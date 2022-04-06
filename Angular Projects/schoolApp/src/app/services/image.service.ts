import { Injectable } from '@angular/core';
import IImage from '../core/models/iimage.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public imageCollection: AngularFirestoreCollection<IImage>;
  constructor(private angularFirestore: AngularFirestore) {
    this.imageCollection = this.angularFirestore.collection('images');
  }

  async createImage(data: IImage) {
    await this.imageCollection.add(data);
  }
}
