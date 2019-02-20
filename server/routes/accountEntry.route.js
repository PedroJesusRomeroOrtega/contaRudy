const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const accountEntry_controller = require('../controllers/accountEntry.controller');

router.get('/', accountEntry_controller.accountEntry_get_all);
router.get('/:id', accountEntry_controller.accountEntry_get);
router.post('/',accountEntry_controller.accountEntry_create);
router.put('/:id', accountEntry_controller.accountEntry_update);
router.delete('/:id', accountEntry_controller.accountEntry_delete);

module.exports = router;
