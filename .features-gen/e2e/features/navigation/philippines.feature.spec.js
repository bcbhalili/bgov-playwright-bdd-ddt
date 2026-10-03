// Generated from: e2e\features\navigation\philippines.feature
import { test } from "playwright-bdd";

test.describe('BGovPH Philippines Navigation Bar', () => {

  test('Navigate to About the Philippines', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the About the Philippines submenu', null, { page }); 
    await Then('the header About the Philippines should be visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\navigation\\philippines.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And the user clicks on the About the Philippines submenu","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the header About the Philippines should be visible","stepMatchArguments":[]}]},
]; // bdd-data-end