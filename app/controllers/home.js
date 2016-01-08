var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Event = mongoose.model('Event');
  Person = mongoose.model('Person');
  Invite = mongoose.model('Invite');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Event.find({})
  .then((events) => {
    res.render('index', {
      events: events,
      title: 'Eventbrite Mini'
    })
  })
  .then(null, next);
})

router.get('/events', function (req, res, next) {
  Event.find({})
  .then((events) => {
    res.status(200).json(events)
  })
  .then(null, next)
})

router.post('/events', function (req, res, next) {
  Event.create({
    name: req.body.name,
    date: req.body.date
  })
  .then((event) => {
    res.status(201).json(event);
  })
  .then(null, next)
})

// POST to event/event_id/person_id to create an Invite for an Event to a Person
router.post('/events/:eventId/:personId', function (req, res, next) {
  Invite.create({
    person: req.params.personId,
    event: req.params.eventId
  })
  .then((invite) => {
    res.status(201).json(invite)
  })
  .then(null, next)
})

router.get('/persons', function (req, res, next) {
  Person.find({})
  .then((persons) => {
    res.status(200).json(persons);
  })
  .then(null, next)
})

router.post('/persons', function (req, res, next) {
  Person.create({
    first: req.body.first,
    last: req.body.last
  })
  .then((person) => {
    res.status(201).json(person)
  })
  .then(null, next)
})

router.get('/invites', function (req, res, next) {
  Invite.find({})
  .then((invites) => {
    res.status(200).json(invites)
  })
})

// POST to an invite id to accept that invite, 
// adding that invite's Person to that Event's list of attendees
router.post('/invites/:inviteId', function (req, res, next) {
  var person;
  Invite.findById(req.params.inviteId)
  .then((invite) => {
    person = invite.person;
    return Event.findById(invite.event);
  })
  .then((event) => {
    event.addAttendee(person);
    return event.save();
  })
  .then((event) => {
    res.status(200).json(event)
  })
  .then(null, next)
})

