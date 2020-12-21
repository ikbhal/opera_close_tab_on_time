

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
	  //closeInMilliSeconds = 3000;//testing
	  setTimeout(closeTabHandler, closeInMilliSeconds);

	  var tabId = null;
	  chrome.tabs.query({
		currentWindow: true,
		active: true
	  	// Get the current tab
	  }, function(tab){
		// Remove the tab set
		tabId = tab[0].id;
	  });
	  function closeTabHandler() {
		// check if tab exist before showing alter
		alert('closing  tab');
		chrome.tabs.remove(tabId);
	  }

});
