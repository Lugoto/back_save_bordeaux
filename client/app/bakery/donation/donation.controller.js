'use strict';

(function(){

class DonationComponent {
  constructor() {

  }
}

angular.module('saveBordeauxApp')
  .component('donation', {
    templateUrl: 'app/bakery/donation/donation.html',
    controller: DonationComponent,
    controllerAs: 'vm'
  });

})();
