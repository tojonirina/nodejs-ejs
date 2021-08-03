let models = require('../models');

module.exports = {

    // Get index page
    index: function (req, res) {
        return res.render('pages/index');
    },

    // Post an item
    post: function (req, res) {

        models.Items.create({
            item: req.body.item,
        })
        .then((createdItem) => {
            return redirect('/');
        })
        .catch((error) => {
            return res.status(500).json( { "message":"Server error with: " + error} );
        });
        
    },

}