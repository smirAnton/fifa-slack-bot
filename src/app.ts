import expressValidator from "express-validator";
import errorHandler from "errorhandler";
import compression from "compression";
import bodyParser from "body-parser";
import SlackBot from "slackbots";
import express from "express";
import dotenv from "dotenv";
import lusca from "lusca";
import path from "path";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

app.get("/", (req, res, next) => {
  const bot = new SlackBot({
    token: "xoxb-339653404052-lBaJ3HUhYUaTlYC5gc2AqgkK", // Add a bot https://my.slack.com/services/new/bot and put the token
    name: "Fifa bot"
  });

  bot.on("start", function () {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    const params = {
      icon_emoji: ":soccer:"
    };

    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    bot.postMessageToChannel("general", "Hello there", params);
  });

  res.status(200).send({ ok: 1 });
});

app.use(errorHandler());

export default app;