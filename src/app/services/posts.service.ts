import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private firestore: Firestore) {}

  async getData() {
    const collectionItem = collection(this.firestore, 'posts');
    const collectionRef = query(
      collectionItem,
      where('isFeatured', '==', true),
      limit(4)
    );
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((doc) => {
      // return doc.data();
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
  }

  async getLatest() {
    const collectionItem = collection(this.firestore, 'posts');
    const collectionRef = query(collectionItem, orderBy('createdAt'));
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((doc) => {
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
  }

  async getCategoryPosts(categoryId: string) {
    const collectionItem = collection(this.firestore, 'posts');
    const collectionRef = query(
      collectionItem,
      where('category.categoryId', '==', categoryId)
    );
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((doc) => {
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
  }

  async getOnePost(postId: string) {
    const docRef = doc(this.firestore, 'posts', postId);
    const docSnap = await getDoc(docRef);
    return {
      data: docSnap.data(),
      id: docSnap.id,
    };
  }

  async getSimilar(categoryId: string) {
    const collectionItem = collection(this.firestore, 'posts');
    const collectionRef = query(
      collectionItem,
      where('category.categoryId', '==', categoryId),
      limit(3)
    );
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((doc) => {
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
  }
}
