import { ChooseAdventurePage } from './app.po';

describe('choose-adventure App', () => {
  let page: ChooseAdventurePage;

  beforeEach(() => {
    page = new ChooseAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
