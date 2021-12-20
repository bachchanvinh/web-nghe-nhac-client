import db from '../init'
import * as firestorage from "firebase/storage";

// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = firestorage.getStorage();




export const upLoadphoto = (filename, file) => {
    const storageRef = firestorage.ref(storage, `Users/Avatar/${filename}`);

    const uploadTask = firestorage.uploadBytesResumable(storageRef, file);
    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error)
                console.log(error)
            },
            () => {

                firestorage.getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    resolve(downloadURL)
                });
            }
        );
    })

}
