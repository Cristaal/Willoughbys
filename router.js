Auctioneer.Router.map(function() {
  this.resource('lots', {path: '/'});
  this.resource('lot', {path: ':lot_id'}, function() {
    this.resource('lot');
  });
  this.resource('about');
  this.resource('contact');
  // this.resource('change-bid');
});
