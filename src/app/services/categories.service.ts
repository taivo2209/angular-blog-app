import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private firestore: Firestore) {}

  getData() {
    const collectionItem = collection(this.firestore, 'categories');
   
    return collectionData(collectionItem, { idField: 'id' });
  }
}
