import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Anime
}

const animeSchema = new Schema({
    name:{
        type: String,
        required: true,
    } ,
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear()
          },
        min: 1900
    } ,
    category: {
        type: String,
    } ,
  },{
    timestamps: true,
  });
  
  const Anime = mongoose.model("Anime", animeSchema);