var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegexAyy = /^\/ayyy/;  botRegexDL = /^\/DDL/i;botRegexFuck = /^\/fuckthis/; botRegexRant = /^\/rant/; botRegexPop = /^\/popcorn/;botRegexYes = /^\/yes/;botRegexRage = /^\/raging/;botRegexLaugh = /^\/lol/;botRegexPicks = /^\/draftpicks/;botRegexCheese = /^\/bengalsplaybook/;botRegexPlay = /^\/playgames/;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexPB = /^\/pablo/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botRegexELI5 = /^\/eli5/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexDamn = /^\/damnright/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexDEN = /^\/excuses/; botRegexAss = /^\/ass/;botRegexTY = /^\/typeevlo/;botRegexBoot = /^\/boot/;botRegexHeh = /^\/don'tmindme/;botRegexK = /^\/k/;botRegexOh = /^\/oh!/;botRegexGG = /^\/gg/;botRegexWTF = /^\/wtf/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegexAyy.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://imgur.com/0YFbUAu");
    this.res.end();
  } 
  else if(request.text && botRegexWTF.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/XHBa71T.jpg");
    this.res.end();
  }
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/mcfslv2/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  }
  else if(request.text && botRegexFuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/Pch8FiF08bc1G/200w.gif");
    this.res.end();
  }
  else if(request.text && botRegexRant.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/Czwjw1A.gifv")
    this.res.end();
  }
  else if(request.text && botRegexPop.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/agJIP.gif")
    this.res.end();
  }
  else if(request.text &&botRegexYes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.gifbin.com/bin/20048442yu.gif");
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
    postMessage("https://docs.google.com/document/d/1Ya0eDAzBN-LkipKT0KOSFfsVTyBfMNpvovU2Nl4T9U4/edit?usp=drive_web");
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
  else if(request.text && botRegexELI5.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://imgur.com/rmPS47N");
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
    postMessage("https://m.popkey.co/964d03/g3KvO.gif")
    this.res.end();
  }
  else if(request.text && botRegexBoot.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://mfi-miami.com/wp-content/uploads/2015/01/monopoly-guy-getting-booted.png")
    this.res.end();
  }
  else if(request.text && botRegexHeh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://giant.gfycat.com/DecisiveSlushyAfricanwildcat.gif")
    this.res.end();
  }
  else if(request.text && botRegexK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://imgur.com/nKeTco0")
    this.res.end();
  }
   else if(request.text && botRegexOh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://gph.is/1NOMJAr")
    this.res.end();
  }
   else if(request.text && botRegexGG.test(request.text)) {
     this.res.writeHead(200);
     postMessage("http://i1.kym-cdn.com/photos/images/original/000/802/696/6c6.jpg")
     this.res.end();
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
