Qaboard.QuestionRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.question_id);
  }
});