const { browser } = require("protractor");
var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");

var reporter = new HtmlScreenshotReporter({
  dest: "target/screenshots",
  filename: "my-report.html",
});

// An example configuration file.
exports.config = {
  directConnect: true,
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  
  specs: ['../tests/contextmenu.js', '../tests/multiframes.js'],
  // Capabilities to be passed to the webdriver instance.
  //SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ["--headless", "show-fps-counter=true"]
    }, 
    shardTestFiles: true,
    maxInstances: 3
  },
 
  // multiCapabilities:[
  //   {
  //     "browserName": "chrome",
  //     shardTestFiles: true,
  //     maxInstances: 3
  //   },
  //   {
  //     "browserName": "firefox",
  //     shardTestFiles: true,
  //     maxInstances: 3
  //   }
  // ],


  

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['../tests/contextmenu.js'], // single
  //specs: ['../tests/*.js'],  ///sequent
  

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {

    browser.driver.manage().window().maximize();

    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    })

    var fs = require('fs-extra');
 
    fs.emptyDir('screenshots/', function (err) {
            console.log(err);
        });
    
        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
    
                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    jasmine.getEnv().addReporter(reporter);

    //allure reporter
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    //html reporter
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'xmlresults'
    }));
  },

  //HTMLReport called once tests are finished
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
          reportTitle: 'Protractor Test Execution Report',
          outputPath: './',
          outputFilename: 'ProtractorTestReport',
          screenshotPath: './screenshots',
          testBrowser: browserName,
          browserVersion: browserVersion,
          modifiedSuiteName: false,
          screenshotsOnlyOnFailure: true,
          testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
  });
  }

};
