
/*
 * GET users listing.
 */

var SerialPort = require("serialport").SerialPort;

exports.volume_up = function(req, res){
	sendCommand(53, res, 3);
};

exports.volume_down = function(req, res){
	sendCommand(54, res, 3);
};

exports.power_off = function(req, res){
	sendCommand(34, res, 1);
};

exports.power_on = function(req, res){
	sendCommand(35, res, 1);
};

exports.source_71 = function(req, res) {
	sendCommand(100, res, 1);
};

exports.source_optical = function(req, res) {
	sendCommand(14, res, 1);
}

exports.source_line = function(req, res) {
	sendCommand(16, res, 1);
}

exports.sub_up = function(req, res) {
	sendCommand(97, res, 3);
}

exports.sub_down = function(req, res) {
	sendCommand(98, res, 3);
}

exports.toggle_late_night = function(req, res) {
	sendCommand(12, res, 1);
}

function sendCommand(command, res, repeat) {
	var serialPort = new SerialPort("/dev/ttyUSB0", {
		baudrate: 9600
	});

	serialPort.on("open", function() {
		var prefix = [];
		for(var i = 0; i < repeat; i++) {
			prefix = prefix.concat([224, 82, 83, 33, command]);
		}
		serialPort.write(new Buffer(prefix), function(err, result) {
			serialPort.close();
			res.send(200);
		});
	});
}
