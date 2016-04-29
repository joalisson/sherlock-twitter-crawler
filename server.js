var Twitter = require('twitter');
var fs = require('fs');

var twitterClient = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
});

var results = [];
var params = {screen_name: 'username', count: 300};

twitterClient.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    tweet = tweets[0].text;
    for (i=0; i < tweets.length; i++){
        tw = tweets[i].text;
        results = results.concat(tw + '\n');
    }
}

fs.writeFile('file.txt', results, function (err) {
    if (err) 
        return console.log(err);
    console.log('File generated:');
});
});
