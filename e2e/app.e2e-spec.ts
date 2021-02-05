import { BlankDiamondPage } from './app.po';

describe('blank-diamond App', () => {
  let page: BlankDiamondPage;

  beforeEach(() => {
    page = new BlankDiamondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
