chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "http://dev.opera.com"
		});
	});
});


chrome.commands.onCommand.addListener(function(commandName) {
	var commands = [
		{ 'alarmName': "close_in_5_minutes", 'closeInMinutes': 5},
		{ 'alarmName': "close_in_10_minutes", 'closeInMinutes': 10},
		{ 'alarmName': "close_in_15_minutes", 'closeInMinutes': 15},
		{ 'alarmName': "close_in_30_minutes", 'closeInMinutes': 30}
	  ];
  
	  var result = commands.filter(function(cmd){
		return cmd.alarmName ===commandName;
	  });
	  if(!result || result.length != 1) {
		console.log("invalid commandName " + commandName);
		return ;
	  }
  
	  var command = result[0];
	  
	  alert("starting alarm " + command.closeInMinutes + " in minutes");
	  var closeInMilliSeconds = command.closeInMinutes * 60 * 1000;

	  setTimeout(closeTabHandler, closeInMilliSeconds);

	  function closeTabHandler() {
			alert('closing current tab');
			chrome.tabs.remove(tab[0].id);
	  }

});
