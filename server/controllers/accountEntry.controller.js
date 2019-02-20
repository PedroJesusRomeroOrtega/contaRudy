const mongoose = require('mongoose');
const AccountEntry = require('../models/accountEntry.model');

exports.accountEntry_create = function(req, res, next) {
  const accountEntry = new AccountEntry({
    date: new Date(req.body.date),
    concept: req.body.concept,
    amount: req.body.amount,
  });

  accountEntry.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('Account entry created successfully');
  });
};

exports.accountEntry_get_all = function(req, res, next) {
  AccountEntry.find({}, function(err, accountEntries) {
    if (err) return next(err);
    res.send(accountEntries);
  });
};

exports.accountEntry_get = function(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) res.send(null);

  AccountEntry.findById(req.params.id, function(err, accountEntry) {
    if (err || !accountEntry) return next(err);
    res.send(accountEntry);
  });
};

exports.accountEntry_update = function(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) res.send(null);

  AccountEntry.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, accountEntry) {
    if (err) return next(err);
    res.send('Account entry udpated.');
  });
};

exports.accountEntry_delete = function(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) res.send(null);

  AccountEntry.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
};
