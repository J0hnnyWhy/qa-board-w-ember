Qaboard.QuestionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('question');
    return this.store.find('author')
  }
});