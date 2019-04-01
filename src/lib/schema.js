const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId, Mixed } = Schema.Types
const ttl = require('mongoose-ttl')


/*

const PasswordSchema = new Schema({
    user: { type: ObjectId, ref: 'User' },
    code: String
})

PasswordSchema.plugin(ttl, { ttl: '3m' });
const Password = mongoose.model('Password', PasswordSchema)

*/



/*

const Param = mongoose.model('Param', new Schema({
    account: { type: ObjectId, ref: 'Account' },
    name: String,
    id: String,
    type: { type: String, enum: ['text', 'select', 'multiselect'], default: 'text' },
    items: [String],
    description: String
}))

*/