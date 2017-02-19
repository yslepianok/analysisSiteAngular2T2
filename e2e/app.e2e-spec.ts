import { AnalysisSiteAngular2T2Page } from './app.po';

describe('analysis-site-angular2-t2 App', function() {
  let page: AnalysisSiteAngular2T2Page;

  beforeEach(() => {
    page = new AnalysisSiteAngular2T2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
