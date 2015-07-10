Qaboard.Question = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  comments: DS.hasMany('answer', {async: true})
});