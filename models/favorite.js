const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        refs: 'User'
    },
    campsites: {
        type: Schema.Types.ObjectId,
        refs: 'Campsite'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorite', favoriteSchema)