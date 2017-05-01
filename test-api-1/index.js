var hrstart;

function handleGET (req, res) {  
  
  setTimeout(function () {
    var hrend = process.hrtime(hrstart);
    console.info({json});
    console.info({foo: "bar"});
    console.info({
      "executionTimeSec": hrend[0], 
      "executionTimeMs": hrend[1]/1000000
    });

    res.header("Access-Control-Allow-Origin", "https://www.itnotes.de");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({ message: 'hooray! welcome to our api!' });    
  }, Math.random() * 3000);
}

function handlePUT (req, res) {
  // Do something with the PUT request
  res.status(403).send('Forbidden!');
}

/**
 * Responds to a GET request with "Hello World!". Forbids a PUT request.
 *
 * @example
 * gcloud beta functions call testApi1
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.testApi1 = function helloHttp (req, res) {
  
  hrstart = process.hrtime();
  switch (req.method) {
    case 'GET':
      handleGET(req, res);
      break;
    case 'PUT':
      handlePUT(req, res);
      break;
    default:
      res.status(500).send({ error: 'Something blew up!' });
      break;
  }
};