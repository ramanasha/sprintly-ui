// Hook writes istanbul coverage data to coverage.json file
module.exports = {
  afterEnd: function(runner) {
    const fs = require('fs');
    const coverage = runner.page.evaluate(function() {
      return window.__coverage__;
    });
    if (coverage) {
      console.log('Writing coverage to coverage/coverage.json');
      fs.write('coverage/coverage.json', JSON.stringify(coverage), 'w');
    } else {
      console.log('No coverage data generated');
    }
  }
};
