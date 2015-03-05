Auctioneer.Lot = DS.Model.extend({
  name: DS.attr(),
  items: DS.hasMany('items', {async: true})
});
