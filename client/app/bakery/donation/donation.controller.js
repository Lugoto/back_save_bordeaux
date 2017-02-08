'use strict';

(function(){

class DonationComponent {
  constructor() {
    this.cardNumber = 1;
    this.listDonations = [];
    this.item = {};
  }

  setPreviousCardNumber() {
    this.cardNumber --;
  }

  setNextCardNumber() {
    this.cardNumber ++;
  }

  addDonationToList() {
    this.listDonations.push(this.item);
    this.item = {};
  }

  debug() {
    console.log(this.item);
    console.log(this.listDonations);
  }
}

angular.module('saveBordeauxApp')
  .component('donation', {
    templateUrl: 'app/bakery/donation/donation.html',
    controller: DonationComponent,
    controllerAs: 'vm'
  });

})();
