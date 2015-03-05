Auctioneer.LotController = Ember.ObjectController.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      var item = this.store.createRecord('item', {
        artifactName: this.get('artifact-name'),
        owner: this.get('owner'),
        startingBid: this.get('starting-bid'),
        artifactImage: this.get('artifact-image')
      });
      item.save();

      // var self = this;
      // self.set('artifact-name', 'owner', 'starting-bid', 'artifact-image', '');

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(item);
      lot.save()

      this.transitionToRoute('lot', lot.id);
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('lots');
      }
    }
  }
});
