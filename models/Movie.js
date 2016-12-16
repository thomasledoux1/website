var mongoose = require('mongoose');

// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
  title: String,
  url : String
});

// Export the model.
mongoose.model('Movie', MovieSchema);
