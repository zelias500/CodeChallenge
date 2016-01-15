var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var EventSchema = new Schema({
	name: String,
	date: String,
	attendees: [{type: Schema.Types.ObjectId, ref:'Person'}]
})

EventSchema.methods.addAttendee = function (person) {
	this.attendees.push(person);
}

var PersonSchema = new Schema({
	first: String,
	last: String
})

var InviteSchema = new Schema({
	person: {type: Schema.Types.ObjectId, ref:'Person'},
	event: {type: Schema.Types.ObjectId, ref:'Event'},
	attending: {type: String, enum: ['yes', 'no', 'maybe']}
})

mongoose.model('Event', EventSchema);
mongoose.model('Person', PersonSchema);
mongoose.model('Invite', InviteSchema);