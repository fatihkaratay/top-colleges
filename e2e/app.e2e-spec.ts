import { CollegelistPage } from './app.po';

describe('collegelist App', function() {
  let page: CollegelistPage;

  beforeEach(() => {
    page = new CollegelistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
