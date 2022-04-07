import firebase from 'firebase/compat/app';

export default interface IImage {
  docID?: string;
  uid: string;
  title: string;
  fileName: string;
  url: string;
  timestamp: firebase.firestore.FieldValue;
}
