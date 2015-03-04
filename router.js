Auctioneer.Router.map(function() {
  this.resource('lots', {path: '/'});
  this.resource('lot', {path: ':lot_id'});
  this.resource('about'); 
});
