/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for frontend', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be frontend', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('frontend');
    })
  });

  it('network-name should be license_tracking_business@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('license_tracking_business@0.0.1.bna');
    });
  });

  it('navbar-brand should be frontend',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('frontend');
    });
  });

  
    it('License component should be loadable',() => {
      page.navigateTo('/License');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('License');
      });
    });

    it('License table should have 40 columns',() => {
      page.navigateTo('/License');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(40); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('LicenseOrganization component should be loadable',() => {
      page.navigateTo('/LicenseOrganization');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LicenseOrganization');
      });
    });

    it('LicenseOrganization table should have 7 columns',() => {
      page.navigateTo('/LicenseOrganization');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  
    it('LicenseHolder component should be loadable',() => {
      page.navigateTo('/LicenseHolder');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LicenseHolder');
      });
    });

    it('LicenseHolder table should have 5 columns',() => {
      page.navigateTo('/LicenseHolder');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('RuleViolationDept component should be loadable',() => {
      page.navigateTo('/RuleViolationDept');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RuleViolationDept');
      });
    });

    it('RuleViolationDept table should have 5 columns',() => {
      page.navigateTo('/RuleViolationDept');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('applyForLicense component should be loadable',() => {
      page.navigateTo('/applyForLicense');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('applyForLicense');
      });
    });
  
    it('applicationAcceptance component should be loadable',() => {
      page.navigateTo('/applicationAcceptance');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('applicationAcceptance');
      });
    });
  
    it('postWrittenTestDetail component should be loadable',() => {
      page.navigateTo('/postWrittenTestDetail');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('postWrittenTestDetail');
      });
    });
  
    it('postSimulatorTestDetail component should be loadable',() => {
      page.navigateTo('/postSimulatorTestDetail');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('postSimulatorTestDetail');
      });
    });
  
    it('postOnRoadTestDetail component should be loadable',() => {
      page.navigateTo('/postOnRoadTestDetail');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('postOnRoadTestDetail');
      });
    });
  
    it('supplyLicense component should be loadable',() => {
      page.navigateTo('/supplyLicense');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('supplyLicense');
      });
    });
  
    it('applyForUpdateLicense component should be loadable',() => {
      page.navigateTo('/applyForUpdateLicense');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('applyForUpdateLicense');
      });
    });
  
    it('isLicenseUpdated component should be loadable',() => {
      page.navigateTo('/isLicenseUpdated');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('isLicenseUpdated');
      });
    });
  
    it('applyRenewLicense component should be loadable',() => {
      page.navigateTo('/applyRenewLicense');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('applyRenewLicense');
      });
    });
  
    it('isLicenseRenewed component should be loadable',() => {
      page.navigateTo('/isLicenseRenewed');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('isLicenseRenewed');
      });
    });
  
    it('fileACase component should be loadable',() => {
      page.navigateTo('/fileACase');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('fileACase');
      });
    });
  
    it('postSuspensionOrRevocation component should be loadable',() => {
      page.navigateTo('/postSuspensionOrRevocation');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('postSuspensionOrRevocation');
      });
    });
  

});