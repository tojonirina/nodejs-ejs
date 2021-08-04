let models = require('../models');

module.exports = {

    // Get index page
    index: function (req, res) {

        models.Items.findAll()
        .then((allItem) => {
            return res.render('pages/index', { 'items': allItem });
        })
        .catch((error) => {
            return res.status(500).json({'message':'Server error with error : ' + error});
        });
        
    },

    // Post an item
    post: function (req, res) {

        models.Items.create({
            item: req.body.item,
        })
        .then((createdItem) => {
            return res.redirect('/');
        })
        .catch((error) => {
            return res.status(500).json( { "message":"Server error with: " + error} );
        });
        
    },

    // Update item status to done
    done: function (req, res) {

        models.Items.update(
            {
                status: true,
            },
            {
                where: {
                    id: req.params.id
                },
            }
        )
        .then((updatedItem) => {
            return res.redirect('/');
        })
        .catch((error) => {
            return res.status(500).json({ 'message': 'Server error with : ' + error});
        });

    }

}