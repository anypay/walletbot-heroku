"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//@ts-ignore
const walletbot_1 = require("@anypay/walletbot");
const walletBot = new walletbot_1.WalletBot({
    seed_phrase: process.env.WALLETBOT_SEED_PHRASE,
    auth_token: process.env.WALLETBOT_AUTH_TOKEN,
    api_base: process.env.API_BASE || 'https://walletbot.anypayx.com'
});
walletBot.start();
