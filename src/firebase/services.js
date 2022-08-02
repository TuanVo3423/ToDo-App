import { db } from './config';
import { doc, setDoc } from 'firebase/firestore';

export const addDocument = (collection, data) => {
    const query = db.collection(collection);
    query
        .add({
            ...data,
        })
        .catch(function (error) {
            console.error('There was an error uploading a file to Cloud Storage:', error);
        });
};
export const updateDocument = (collection, data, id) => {
    db.collection(collection)
        .doc(id)
        .update({
            ...data,
        })
        .then(function () {
            console.log('Document updated with ID ', data);
        })
        .catch(function (error) {
            console.error('Error updating document', data);
        });
};
export const deleteDocument = (collection, id) => {
    db.collection(collection)
        .doc(id)
        .delete()
        .then(() => {
            console.log('Document successfully deleted!');
        })
        .catch((error) => {
            console.error('Error removing document: ', error);
        });
};
