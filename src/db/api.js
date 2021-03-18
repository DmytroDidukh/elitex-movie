import firebase from "firebase";
require("firebase/firestore");

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APP_ID,
    databaseUrl: process.env.REACT_APP_DATABASE_URL,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

firebase.initializeApp(config);

// export const db = firebase.firestore();
// export const storageRef = firebase.storage().ref('images');
// export const auth = firebase.auth();

class ApiService {
    db = firebase.firestore();
    storageRef = firebase.storage().ref('images');
    auth = firebase.auth();
    // constructor() {
    //     this.db = firebase.firestore();
    //     this.storageRef = firebase.storage().ref('images');
    //     this.auth = firebase.auth();
    // }


    saveMovieToDb(data) {
        this.db.collection("movies")
            .add(data)
            .catch((error) => console.error("Error adding document: ", error));
    }

    deleteMovieFromDb (id) {
        this.db.collection("movies")
            .doc(id)
            .delete()
            .catch((error) => console.error("Error deleting document: ", error));
    }

    async getMovies () {
        try {
            const moviesData = []
            const response = await this.db
                .collection("movies")
                .orderBy('created', "desc")
                .get()

            response.docs.forEach(doc => {
                moviesData.push({id: doc.id, ...doc.data()})
            })
            return moviesData
        } catch (e) {
            console.error(e)
        }
    }

    async uploadImage (file, fileName) {
        try {
            return this.storageRef.child(fileName).put(file)
                .then(res => res.ref.getDownloadURL())
        } catch (e) {
            console.error(e)
        }
    }
}

export default new ApiService()

// export const saveMovieToDb = (data) => {
//     db.collection("movies")
//         .add(data)
//         .catch((error) => console.error("Error adding document: ", error));
// }
//
// export const deleteMovieFromDb = (id) => {
//     db.collection("movies")
//         .doc(id)
//         .delete()
//         .catch((error) => console.error("Error deleting document: ", error));
// }
//
// export const getMovies = async () => {
//     try {
//         const moviesData = []
//         const response = await db
//             .collection("movies")
//             .orderBy('created', "desc")
//             .get()
//
//         response.docs.forEach(doc => {
//             moviesData.push({id: doc.id, ...doc.data()})
//         })
//         return moviesData
//     } catch (e) {
//         console.error(e)
//     }
// }
//
// export const uploadImage = async (file, fileName) => {
//     try {
//         return storageRef.child(fileName).put(file)
//             .then(res => res.ref.getDownloadURL())
//     } catch (e) {
//         console.error(e)
//     }
// }
