Auctioneer.LotsController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('name')
      });
// debugger;
      newLot.save();
      // this.transitionToRoute('lots');
    }
  }
});
