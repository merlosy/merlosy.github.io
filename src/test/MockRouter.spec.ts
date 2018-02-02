export default class MockRouter {
  public navigate() {
    return jasmine.createSpy('navigate');
  };
}
