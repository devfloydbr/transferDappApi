import { Request, Response } from 'express'

import { cryptumSDK } from '../services/cryptum'

const walletController = cryptumSDK.getWalletController()

export default { 
  async read(req: Request, res: Response) {
    const { address, protocol } = req.params   

    const walletInfo = await walletController.getWalletInfo({
      address,
      protocol
    })

    return res.json({ walletInfo })
  },

  async create(req: Request, res: Response) {
    const { protocol } = req.body

    const mnemonic = walletController.generateRandomMnemonic()
    
    const wallet = await walletController.generateWallet({
      protocol: protocol,
      mnemonic: mnemonic
    }) 

    const response = {
      wallet,
      mnemonic
    }

    return res.json({ response })
  }
}

