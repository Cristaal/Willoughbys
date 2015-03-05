Auctioneer.LotController = Ember.ObjectController.extend({
  needs: ['lot'],
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var item = this.store.createRecord('item', {
        artifactName: this.get('artifact-name'),
        owner: this.get('owner'),
        startingBid: this.get('starting-bid'),
        artifactImage: this.get('artifact-image')
      });
      item.save();

      this.set('artifact-name', '');
      this.set('owner', '');
      this.set('starting-bid', '');
      this.set('artifact-image', '');

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
