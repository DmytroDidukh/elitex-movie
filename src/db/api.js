import {db, storageRef} from "./db";

export const saveMovieToDb = (data) => {
    db.collection("movies")
        .add(data)
        .catch((error) => console.error("Error adding document: ", error));
}

export const deleteMovieFromDb = (id) => {
    db.collection("movies")
        .doc(id)
        .delete()
        .catch((error) => console.error("Error deleting document: ", error));
}

export const getMovies = async () => {
    try {
        const moviesData = []
        const response = await db
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

export const uploadImage = async (file, fileName) => {
    try {
        return storageRef.child(fileName).put(file)
            .then(res => res.ref.getDownloadURL())
    } catch (e) {
        console.error(e)
    }
}
