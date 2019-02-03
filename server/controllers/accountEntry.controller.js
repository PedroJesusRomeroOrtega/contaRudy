const AccountEntry = require('../models/accountEntry.model');

exports.accountEntry_create = function (req, res) {
    let accountEntry = new AccountEntry(
        {
            id: req.body.id,
            date: req.body.date,
            concept: req.body.concept,
            amount: req.body.amount,
        }
    );

    accountEntry.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Account entry created successfully')
    })
};

exports.accountEntry_details_all = function (req, res) {
    AccountEntry.find({}, function (err, accountEntries) {
        if (err) return next(err);
        res.send(accountEntries);
    })
};

exports.accountEntry_details = function (req, res) {
    AccountEntry.findById(req.params.id, function (err, accountEntry) {
        if (err) return next(err);
        res.send(accountEntry);
    })
};

exports.accountEntry_update = function (req, res) {
    AccountEntry.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, accountEntry) {
        if (err) return next(err);
        res.send('Account entry udpated.');
    });
};

exports.accountEntry_delete = function (req, res) {
    AccountEntry.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};