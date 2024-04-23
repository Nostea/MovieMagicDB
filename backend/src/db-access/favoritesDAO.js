import { ObjectId } from "mongodb";
import { getDb } from "./getDb.js";

function findAll() {
  return getDb().then((db) => db.collection("favorites").find().toArray());
}

function createOne(documentInfo) {
  return getDb()
    .then((db) => db.collection("favorites").insertOne(documentInfo)) // { acknowledged: true, insertedId: ObjectId("...") }
    .then(
      (result) => (result.acknowledged ? { ...documentInfo, _id: result.insertedId } : null) // kopie com dokumnt mit _id (===> gleicher wert wie in der datenbank)
    );
}

function deleteOneByMovieId(movieId) {
  const movieIdAsObjectId = ObjectId.createFromHexString(movieId);
  return getDb().then((db) => db.collection("favorites").findOneAndDelete({ movieId: movieIdAsObjectId }));

  // find all favorites that match
  //mit forEach schleife jeden eintrag lösen
  //* oder mit .deleteMany()
  // db.collection("favorites").deleteMany({ movieId: movieIdAsObjectId})
}

export const FavoritesDAO = {
  findAll,
  createOne,
  deleteOneByMovieId,
};
