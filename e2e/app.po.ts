import { browser, element, by, promise } from 'protractor';

export class MerlosyGithubIoPage {
  navigateTo(): promise.Promise<any> {
    return browser.get('/');
  };

  getParagraphText(): promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
