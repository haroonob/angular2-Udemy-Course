import { AngularDataEventPage } from './app.po';

describe('angular-data-event App', function() {
  let page: AngularDataEventPage;

  beforeEach(() => {
    page = new AngularDataEventPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
