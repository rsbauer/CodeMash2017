var noble = require('noble');

console.log("Starting up...");

noble.on('stateChange', function(state) {
	console.log("State: " + state);
  if (state === 'poweredOn') {
	console.log("Powered on");
    noble.startScanning();
  } else {
	// console.log("Stopping scanning");
    // noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {
    console.log('Found device with local name: ' + peripheral.advertisement.localName);
    console.log('advertising the following service uuid\'s: ' + peripheral.advertisement.serviceUuids);
    console.log();
});


// Drone ID: rs_r093990 