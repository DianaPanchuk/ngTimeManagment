import { NgTimeManagmentPage } from './app.po';

describe('ng-time-managment App', () => {
  let page: NgTimeManagmentPage;

  beforeEach(() => {
    page = new NgTimeManagmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
