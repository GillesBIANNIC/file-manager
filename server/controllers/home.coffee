# -----------------------------------------------------------------------------
# requirements
router = require( 'express' ).Router()

# -----------------------------------------------------------------------------
# router
router
    .route '/home'
    .get ( req, res ) ->
        res.render 'home.jade'

# -----------------------------------------------------------------------------
# exports
module.exports = router