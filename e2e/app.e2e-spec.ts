import { MyFirstCliPage } from './app.po';

describe('my-first-cli App', function() {
  let page: MyFirstCliPage;

  beforeEach(() => {
    page = new MyFirstCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
