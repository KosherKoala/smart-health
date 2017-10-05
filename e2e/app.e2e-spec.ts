import { SmartHealthPage } from './app.po';

describe('smart-health App', () => {
  let page: SmartHealthPage;

  beforeEach(() => {
    page = new SmartHealthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
