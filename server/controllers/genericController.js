export default function buildController(model, modelName) {


	let controller = {

		index: function(req, res, next) {

	    model.findAll().then(function(response) {
	      res.status(200)
	        .json({
	          status: 'success',
	          data: response,
	          message: 'Retrieved ALL ' + modelName
	        });
	      })
	      .catch(function (err) {
	        return next(err);
	      });
	  },

	  show: function(req, res, next) {
	    let id = parseInt(req.params.id);

	    model.findById(id).then(function(response) {
	      if (response) {
	        res.status(200)
	          .json({
	            status: 'success',
	            data: response,
	            message: 'Retrieved ONE ' + modelName
	          });
	      } else {
	        res.status(404)
	          .json({
	            status: 'error',
	            data: response,
	            message: 'Game not found'
	          })
	      }
	    }).catch(function (err) {
	      return next(err);
	    });
	  },

	  create: function(req, res, next) {
	    model.create(req.params).then(function(newItem) {
	      if (newItem) {
	        res.status(200)
	          .json({
	            status: 'success',
	            data: newItem,
	            message: 'Created one ' + modelName
	          });
	      } else {
	        res.status(404)
	          .json({
	            status: 'error',
	            message: 'problem creating ' + modelName
	          });
	      }
	    }).catch(function(err) {
	      console.log(err);
	      return next(err);
	    });
	  }
	};

	return controller;

}