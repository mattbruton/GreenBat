import { HsClientPage } from './app.po';

describe('hs-client App', () => {
  let page: HsClientPage;

  beforeEach(() => {
    page = new HsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hs works!');
  });
});
