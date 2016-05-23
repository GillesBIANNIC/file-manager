// ----------------------------------------------------------------------------
// requirements
const router = require( 'express' ).Router();

// ----------------------------------------------------------------------------
// routes
router.route( '/' ).get(( req, res ) => {
    res.render( 'index.jade' );
});

// ----------------------------------------------------------------------------
// exports
module.exports = router;