describe('App', () => {

  beforeEach( () => {
      browser.get('/');
  });

  it('should have a title', () => {
      expect(browser.getTitle()).toEqual('Hello');
  });

  it('should have <nav>', () => {
      expect(element(by.css('lpmc-app lpmc-navbar nav')).isPresent()).toEqual(true);
  });

});
