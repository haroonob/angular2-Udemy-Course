import { ComplexValidationPage } from './app.po';

describe('complex-validation App', function() {
  let page: ComplexValidationPage;

  beforeEach(() => {
    page = new ComplexValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
