import {db, storageRef} from "./db";

export const saveMovie = (data) => {
    db.collection("movies")
        .add(data)
        .catch((error) => console.error("Error adding document: ", error));
}

export const getMovies = async () => {
    try {
        const moviesData = []
        const response = await db
            .collection("movies")
            .get()

        response.docs.forEach(doc => moviesData.push(doc.data()))
        return moviesData
    } catch (e) {
        console.error(e)
    }
}

export const checkMovieExist = async (movieTitle) => {
    try {
        const response = await db
            .collection("movies")
            .where('title', '==', movieTitle)
            .get()

        if (!response.empty) {
            const snapshot = response.docs[0];
            const data = snapshot.data();
            data.id = snapshot.id
            return data
        }

        return null
    } catch (e) {
        console.error(e)
    }
}

export const uploadImage = async (file, fileName) => {
    try {
        return storageRef.child(fileName).put(file)
            .then(res => res.ref.getDownloadURL())
    } catch (e) {
        console.error(e)
    }
}
