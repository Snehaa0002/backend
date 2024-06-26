const { model,Schema } = require('../connection');

const mySchema = new Schema({
    name :{ type : String, required: true},
    title : { type: String, unique: true },
    image : String,
    createdAt: { type : Date,default: Date.now }
});

module.exports = model('feed', mySchema);