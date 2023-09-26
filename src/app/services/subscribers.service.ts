import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private firestore: Firestore) {}

  addSub(subData: any) {
    const collectionItem = collection(this.firestore, 'subscribers');
    addDoc(collectionItem, subData)
      .then(() => {
        console.log('Subscribers Saved Successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async checkSubs(subEmail: string) {
    const collectionItem = collection(this.firestore, 'subscribers');
    const collectionRef = query(
      collectionItem,
      where('email', '==', subEmail),
    );
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs
    .map((doc) => {
      return doc.data();
    });
  }
}
