var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexPassRush = /^\/passrush/;botRegexYes = /^\/yes/;botRegexRage = /^\/raging/;botRegexLaugh = /^\/lol/;botRegexPicks = /^\/draftpicks/;botRegexCheese = /^\/titansplaybook/;botRegexPlay = /^\/playgames/;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexPB = /^\/pablo/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexDamn = /^\/damnright/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexDEN = /^\/excuses/; botRegexAss = /^\/ass/;botRegexTY = /^\/typeeblo/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mcfslv2/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  }
  else if(request.text && botRegexPassRush.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/XrDT8BuYB312/giphy.gif");
    this.res.end();
  }
  else if(request.text &&botRegexYes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.gifbin.com/bin/20048442yu.gif");
    this.res.end();
  }
    else if(request.text && botRegexRage.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/instances/500x/68399348.jpg")
    this.res.end();
  }
  else if(request.text && botRegexLaugh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://reactiongifs.me/laughing-against-the-world/")
    this.res.end();
  }
  else if(request.text && botRegexPicks.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/144jaa.jpg");
    this.res.end();
  }
  else if(request.text && botRegexPlay.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/145iuh.jpg");
    this.res.end();
  }
   else if(request.text && botRegexCheese.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://images-na.ssl-images-amazon.com/images/I/51kH1qfcU4L._SX258_BO1,204,203,200_.jpg");
    this.res.end();
  }
  else if(request.text && botRegexAss.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://s-media-cache-ak0.pinimg.com/736x/bf/de/aa/bfdeaa758de10f072925051a0770ed1c.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/13spo3.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/Mcfslv2/rules");
    this.res.end();
  } 
  else if(request.text && botRegexPB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgflip.com/13spef.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mcfslv2/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/mcfslv2/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexDamn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reactiongifs.us/wp-content/uploads/2013/03/god_damn_right_breaking_bad.gif");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexDEN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/instances/500x/68399474.jpg")
    this.res.end();
  }
  else if(request.text && botRegexTY.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.gq.com/photos/5643734c3cc8fcfe0e1a05e3/master/w_640/Gbxx90A.gif")
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
