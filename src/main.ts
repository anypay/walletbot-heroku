import { config } from 'dotenv'

config()

import { WalletBot } from '@anypay/walletbot'

const wallet_bot = new WalletBot({
  seed_phrase: process.env.WALLETBOT_SEED_PHRASE as string,
  auth_token: process.env.WALLETBOT_AUTH_TOKEN as string,
  api_base: process.env.WALLETBOT_API_BASE || 'https://walletbot.anypayx.com',
  websocket_enabled: false,
  websocket_url: 'wss://wss.walletbot.anypayx.com',
  http_api_enabled: true,
  prometheus: {
      enabled: true,
      port: Number(process.env.PORT),
      secret: process.env.PROMETHEUS_SECRET
  }
})

wallet_bot.start()
