Auctioneer.LotsController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('name'),
        item: [],
      });
      newLot.save();
      this.set('name', '');
      this.transitionToRoute('lots');
    }
  }
});
