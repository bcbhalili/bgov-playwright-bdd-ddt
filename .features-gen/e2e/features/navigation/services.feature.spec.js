// Generated from: e2e\features\navigation\services.feature
import { test } from "../../../../e2e/ManagerFixture.ts";

test.describe('BGovPH Services Navigation Bar', () => {

  test.beforeEach('Background', async ({ Given, When, managerFixture, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user is in BetterGovPH home page', null, { page }); 
    await When('the user hovers on the Services navigation bar', null, { managerFixture }); 
  });
  
  test.describe('Business and Trade with different searches', () => {

    test('Example #1', { tag: ['@debug'] }, async ({ When, Then, And, managerFixture, page }) => { 
      await And('the user navigates on the "business-and-trade" under "services"', null, { managerFixture }); 
      await Then('the search field with placeholder "search-field-placeholder" is visible under "services"', null, { managerFixture }); 
      await When('the user provided search term "Request for Renewal of Business Name" in search field with placeholder "search-field-placeholder" under "services"', null, { managerFixture, page }); 
      await Then('the url should be "https://bnrs.dti.gov.ph/renewal" upon click of "Request for Renewal of Business Name" result', null, { managerFixture, page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\navigation\\services.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":89,"tags":["@debug"],"steps":[{"pwStepLine":7,"gherkinStepLine":56,"keywordType":"Context","textWithKeyword":"Given the user is in BetterGovPH home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"When the user hovers on the Services navigation bar","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"And the user navigates on the \"business-and-trade\" under \"services\"","stepMatchArguments":[{"group":{"start":26,"value":"\"business-and-trade\"","children":[{"start":27,"value":"business-and-trade","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"services\"","children":[{"start":54,"value":"services","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then the search field with placeholder \"search-field-placeholder\" is visible under \"services\"","stepMatchArguments":[{"group":{"start":34,"value":"\"search-field-placeholder\"","children":[{"start":35,"value":"search-field-placeholder","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":78,"value":"\"services\"","children":[{"start":79,"value":"services","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When the user provided search term \"Request for Renewal of Business Name\" in search field with placeholder \"search-field-placeholder\" under \"services\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Request for Renewal of Business Name\"","children":[{"start":31,"value":"Request for Renewal of Business Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":102,"value":"\"search-field-placeholder\"","children":[{"start":103,"value":"search-field-placeholder","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":135,"value":"\"services\"","children":[{"start":136,"value":"services","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then the url should be \"https://bnrs.dti.gov.ph/renewal\" upon click of \"Request for Renewal of Business Name\" result","stepMatchArguments":[{"group":{"start":18,"value":"\"https://bnrs.dti.gov.ph/renewal\"","children":[{"start":19,"value":"https://bnrs.dti.gov.ph/renewal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":66,"value":"\"Request for Renewal of Business Name\"","children":[{"start":67,"value":"Request for Renewal of Business Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end