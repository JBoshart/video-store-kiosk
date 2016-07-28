import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var query = { page: this.controllerFor('movies').get('page') }
    return this.store.query('movies', query)
  },
  queryParams: {
    page: {
      refreshModel: true
    }
  }
});
