'use strict';

describe('Component: DonationComponent', function () {

  // load the controller's module
  beforeEach(module('saveBordeauxApp'));

  var DonationComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    DonationComponent = $componentController('donation', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
