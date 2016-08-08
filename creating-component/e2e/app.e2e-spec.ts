import { CreatingComponentPage } from './app.po';

describe('creating-component App', function() {
  let page: CreatingComponentPage;

  beforeEach(() => {
    page = new CreatingComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
