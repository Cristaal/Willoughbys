Auctioneer.Item = DS.Model.extend({
  artifactName: DS.attr(),
  owner: DS.attr(),
  startingBid: DS.attr(),
  artifactImage: DS.attr()
});
