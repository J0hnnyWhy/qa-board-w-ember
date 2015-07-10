Qaboard.Question = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});