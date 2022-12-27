//const checker = require('ikea-availability-checker@alpha');
import checker from 'ikea-availability-checker@alpha';

(async function() {
    const result = await checker.availability('394', '00501436');
    console.log('RESULT', result);
})();