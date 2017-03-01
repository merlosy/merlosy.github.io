import { Merlosy.Github.IoPage } from './app.po';

describe('merlosy.github.io App', () => {
  let page: Merlosy.Github.IoPage;

  beforeEach(() => {
    page = new Merlosy.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
