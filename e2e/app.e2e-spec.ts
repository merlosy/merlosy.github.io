import { MerlosyGithubIoPage } from './app.po';

describe('merlosy-github-io App', function() {
  let page: MerlosyGithubIoPage;

  beforeEach(() => {
    page = new MerlosyGithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
