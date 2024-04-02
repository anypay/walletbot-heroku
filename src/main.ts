import { config } from 'dotenv'

config()

//@ts-ignore
import { WalletBot } from '@anypay/walletbot'

const walletBot = new WalletBot({
  seed_phrase: process.env.WALLETBOT_SEED_PHRASE,
  auth_token: process.env.WALLETBOT_AUTH_TOKEN,
  api_base: process.env.API_BASE || 'https://walletbot.anypayx.com'
})

walletBot.start()
