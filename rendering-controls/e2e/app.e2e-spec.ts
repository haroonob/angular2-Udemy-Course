import { RenderingControlsPage } from './app.po';

describe('rendering-controls App', function() {
  let page: RenderingControlsPage;

  beforeEach(() => {
    page = new RenderingControlsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
