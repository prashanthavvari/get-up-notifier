chrome.runtime.onInstalled.addListener(data => {
  var thirtyMin =  30 * 60 * 1000;
  var i = 0;
  setInterval(function() {
    var options = {
      type: 'basic',
      title: 'Be Fit',
      message: 'Its been 30 mins, take a walk',
      iconUrl: '/rocket.jpg'
    };
    var date = new Date();
    if (date.getHours() > 9 && date.getHours() < 11) {
      options.message = "Please checkin";
    }

  chrome.notifications.create('',options);
  }, thirtyMin);
});