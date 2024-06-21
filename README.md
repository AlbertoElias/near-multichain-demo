# NEAR Hub Demo

Example of a NEAR Web App to interact with your NEAR Wallet and multichain subaccounts. 

## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setting Up a testnet Near Wallet

```bash
npm i -g near-cli
near create-account yourname.testnet --useFaucet
```

This will set up an account with the id `yourname.testnet` on the testnet. Remember to change `yourname` to something else.

Now get your private key for this newly created wallet:

```bash
cat ~/.near-credentials/testnet/yourname.testnet.json
```

It should output something like

```json
{"account_id":"yourname.testnet","public_key":"ed25519:63eGmHHXXXXXXXXXXXXXXXXXXXXXXXX","private_key":"ed25519:4Ckoo8WSoCETAUevP8tccjgosssDSy8eTcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
```

Copy the `private_key` and now we're going to import it to a Browser Wallet. For this example we're going to use the [My NEAR Wallet](https://testnet.mynearwallet.com/).

1. Click Import existing account
2. Type in a password
3. Select Private Key
4. Paste the private key from the console

Now you should have a wallet set up on the testnet with 10 NEAR. You can also get more testnet NEAR from the [NEAR Faucet](https://near-faucet.io/).

## Helper Functions

Based on the [docs](https://docs.near.org/build/chain-abstraction/chain-signatures), we are using helper functions from [near-multichain](https://github.com/near-examples/near-multichain/tree/main).

## Learn More about NEAR and Chain Signatures

To learn more about NEAR, take a look at the following resources:

- [NEAR Documentation](https://docs.near.org) - learn about NEAR.
- [Frontend Docs](https://docs.near.org/build/web3-apps/quickstart) - learn about this example.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
