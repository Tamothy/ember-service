import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  totalCost: Ember.computed('shoppingCart.items.length', function() {
    var totalAmount = 0;
    this.get('shoppingCart.items').forEach(function(item) {
      totalAmount += parseInt(item.get('cost'));
    });
    return totalAmount;
  }),

  actions: {
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
      console.log(item);
    },
  }
});
