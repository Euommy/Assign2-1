import mongoose from "mongoose";

const Schema = mongoose.Schema;


const MovieSchema = new Schema({
      username: String,
      password: Number,
      //director: String,
     
},{
      timestamps: true,
      collection: 'movies'
});

export default mongoose.model('Movies', MovieSchema);