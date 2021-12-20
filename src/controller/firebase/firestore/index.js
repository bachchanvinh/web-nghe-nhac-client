import * as firestore from "firebase/firestore";
import db from '../init'


///push data of music to firebase
export async function addDataMusic(music, ind) {
  try {
    const docRef = await firestore.addDoc(firestore.collection(db, "musics"), {
      uid: ind + 1,
      name: music.name,
      singer: music.singer,
      img_src: music.img_src,
      src: music.src,
      time: music.time,
    });
    console.log("Document written with ID: ", docRef.id);
    updateDocument(docRef, docRef.id)//update UID
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addDataUser(username, src, uid) {
  try {
    await firestore.setDoc(firestore.doc(db, "users", uid), {
      uid: uid,
      userName: username,
      likedMusic: [],
      friendList: [],
      ava_src: src
    });
  }
  catch (e) {
    console.error("Error writing document 'users': ", e)
  }

}
async function updateDocument(ref, uid) {
  await firestore.updateDoc(ref, {
    uid_name: uid
  });
}
//-------------------------------------------------------------------------------------------------
//Read data
export async function getMusics(music, callBack) {
  try {
    try {
      const querySnapshot = await firestore.getDocs(firestore.collection(db, "musics"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        music.push(doc.data())

      });
    } catch (e) {
      console.error("Error get music ", e);
    }
    music.sort((a, b) => a.uid - b.uid);
    callBack(music)

  } catch (e) {
    console.log(e)
  }

}

export async function getMusicsliked(likedmusics, music, callBack) {
  try {
    try {
      const querySnapshot = await firestore.getDocs(firestore.collection(db, "musics"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        let res = doc.data()
        if (likedmusics !== undefined) {
          if (likedmusics.indexOf(res.uid_name) > -1) {
            music.push(res)
          }
        }

      });
    } catch (e) {
      console.error("Error get music ", e);
    }
    music.sort((a, b) => a.uid - b.uid);
    callBack(music)

  } catch (e) {
    console.log(e)
  }

}

export async function updateLikedMusic(uidUser, newLikedMusic) {
  const ref = firestore.doc(db, "users", uidUser)
  await firestore.updateDoc(ref, {
    likedMusic: newLikedMusic
  });
}

export async function getUserin4(uid, callback) {
  const docRef = firestore.doc(db, "users", uid);
  try {
    const docSnap = await firestore.getDoc(docRef);
    if (docSnap.exists()) {
      let userin4 = docSnap.data()
      callback(userin4)
      // console.log("Document data:", userin4);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  catch (e) {
    console.log(e)
  }
}

export async function getUsersin4ByUID(uidarray, callback, middelhandel) {
  try {
    try {
      const querySnapshot = await firestore.getDocs(firestore.collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        let res = doc.data()
        if (uidarray.indexOf(res.uid) > -1) {
          middelhandel.push(res)
        }
      });
    } catch (e) {
      console.error("Error get music ", e);
    }
    callback(middelhandel)
  }
  catch (e) {
    console.log(e)
  }

}