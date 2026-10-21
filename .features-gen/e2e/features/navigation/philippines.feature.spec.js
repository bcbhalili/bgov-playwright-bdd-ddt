// Generated from: e2e\features\navigation\philippines.feature
import { test } from "playwright-bdd";

test.describe('BGovPH Philippines Navigation Bar', () => {

  test('Navigate to About the Philippines', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Philippines navigation bar', null, { page }); 
    await And('the user clicks on the "About the Philippines" submenu', null, { page }); 
    await Then('the header "About the Philippines" should be visible', null, { page }); 
    await And('the sub-URL should be "/philippines/about"', null, { page }); 
    await And('the user moves the mouse in the top-left corner of the screen', null, { page }); 
    await And('the submenu should not be visible', null, { page }); 
    await And('the "Philippine landscape" heading image should be visible', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\navigation\\philippines.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When the user hovers on the Philippines navigation bar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And the user clicks on the \"About the Philippines\" submenu","stepMatchArguments":[{"group":{"start":23,"value":"\"About the Philippines\"","children":[{"start":24,"value":"About the Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then the header \"About the Philippines\" should be visible","stepMatchArguments":[{"group":{"start":11,"value":"\"About the Philippines\"","children":[{"start":12,"value":"About the Philippines","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And the sub-URL should be \"/philippines/about\"","stepMatchArguments":[{"group":{"start":22,"value":"\"/philippines/about\"","children":[{"start":23,"value":"/philippines/about","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And the user moves the mouse in the top-left corner of the screen","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"And the submenu should not be visible","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And the \"Philippine landscape\" heading image should be visible","stepMatchArguments":[{"group":{"start":4,"value":"\"Philippine landscape\"","children":[{"start":5,"value":"Philippine landscape","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end