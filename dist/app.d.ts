import { firestore } from './interfaces';
import * as admin from 'firebase-admin';
export declare type firebaseApp = firestore.FirebaseApp | admin.app.App;
export declare type CollectionReference = firestore.CollectionReference | admin.firestore.CollectionReference;
export declare type DocumentReference = firestore.DocumentReference | admin.firestore.DocumentReference;
export declare class App {
    private _app;
    firestore: any;
    constructor(_app: firebaseApp);
}
