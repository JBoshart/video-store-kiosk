import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll: function(store, type, sinceToken) {
    var url = 'http://localhost:3000'
    // var pageNumber = 
    var query = { since: sinceToken, page: pageNumber};
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(url, query).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }
});
