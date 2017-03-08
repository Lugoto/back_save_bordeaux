'use strict';

(function(){

class DonationComponent {
  constructor($http) {
    this.cardNumber = 1;
    this.listDonations = [];
    this.item = {};

    this.http = $http;
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

  getTwoDigitsHour(date) {
    if (typeof date !== 'undefined') {
      return ('0'+ date.getHours() ).slice(-2);
    }
  }

  getTwoDigitsMinutes(date) {
    if (typeof date !== 'undefined') {
      return ('0'+ date.getMinutes() ).slice(-2);
    }
  }

  getFormattedTime(date) {
    if (typeof date !== 'undefined') {
      var hours = this.getTwoDigitsHour(date);
      var minutes = this.getTwoDigitsMinutes(date);
      return hours + "h" + minutes;
    }
  }


}

angular.module('saveBordeauxApp')
  .component('donation', {
    templateUrl: 'app/bakery/donation/donation.html',
    controller: DonationComponent,
    controllerAs: 'vm'
  });

})();
