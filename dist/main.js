"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const walletbot_1 = require("@anypay/walletbot");
const wallet_bot = new walletbot_1.WalletBot({
    seed_phrase: process.env.WALLETBOT_SEED_PHRASE,
    auth_token: process.env.WALLETBOT_AUTH_TOKEN,
    api_base: process.env.WALLETBOT_API_BASE || 'https://walletbot.anypayx.com',
    websocket_enabled: false,
    websocket_url: 'wss://wss.walletbot.anypayx.com',
    prometheus: {
        enabled: true,
        port: Number(process.env.PORT),
        secret: process.env.PROMETHEUS_SECRET
    }
});
wallet_bot.start();
