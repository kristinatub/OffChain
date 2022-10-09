Off Chain - The Social Off-RampDebitCard
Client Side App: https://www.figma.com/proto/QGRsSYnVccQGRukr5SMxR4/ETH-Bogota?node-id=350%3A3525&scaling=scale-down&page-id=350%3A3443&starting-point-node-id=350%3A3444

The problem:

While the world is focused on bringing normies on- chain, we are solving the problem of convenience for those who are already on-chain and need practical payment methods. As it relates to user adoption currently there is too much focus on On-Ramp while the majority of bills, payments, and transactions are in fiat. Additionally there is a tedious off ramp process and lack of social accountability for someone who is responsible for purchases.

Our Solution and How its Built:

Off Chain solves the need to off ramp crypto with an easy to use NFC debit card attached to our off chain platform. Clients will log in using Wallet Connect, with authentication through web3 authorization. A unique NFC debit card will then be generated. Once the NFC card comes in contact with a reader and an exchange is requested, we then use Cowswap to get the best swap prices between the desired coin to ETH. The cowswap protocol will call the getQuote function, sign the order and post the signed order using sendOrder function. Once the swap has been completed, then the ETH will be sent to our off ramp wallet then we send fiat directly to the merchant. 

Once an exchange is successful, we then call the getOrder CowSwap function to  then utilize Lens Protocol to share the user transactions with friends and allow for social spending, investing  and accountability. Users will have the ability to like, comment, and see other friend’s transactions and keep track of what their groups are spending. Additionally, this can be spun to allow for advertising and accountability of what influencers are actually buying. 

Components of the app:

Social Homepage: Similar to Venmo, users are able to see what others’ purchase. With the like and commenting feature, it allows for Off-Chain to be a community where a friend who is viewing friends’ transactions can be “influenced” to have similar spending habits and purchase similar items. On the other hand, our vision for the future is to also incorporate incentives for users to meet their savings goals. 

User Profile: The  User Provile is the user’s dashboard that has some high level analytics on spending and showcases balances and has an integration with lens protocol to connect their profile.

Budgeting: 
This dashboard will be private.This functionality will be similar to Mint, where it categorizes your cash flow, so you have a better understanding of where your money goes. The main differentiating factor is that it will categorize your transactions from all your wallets and debit, credit cards all into one place. You can also view the real time conversion rate of a US Dollar, Euro, Peso (from different countries), Ethereum, USDC coin etc. 

NFC Card Page: The NFC card will work similarly to Apple Play or Tap & Go. This functionality will allow for instant transactions from any coin in a user's wallet to any fiat currency. Once the NFC card has come in contact with a reader and an exchange has been requested, the cowswap protocol will call the getQuote function, sign the order and post the signed order using sendOrder.


Sponsors:
We integrated CowSwap to execute swaps from any supported coin to ETH for superior pricing for our users. We used code in Home.jsx to get order data that then calls, signs, and posts the signed order. The cowswap protocol will call the getQuote function, sign the order and post the signed order using sendOrder. We then call the function “cowSdk.cowApi.getOrder” to fetch order data to then implement on Lens to provide the social saving and social investing portion of the application.

With Wallet Connect as a pioneer in web3 communications, their protocol enables any of our user’s wallet and apps to connect securely to Off-Chain. Metamask is used to allow our users to log into our dApp by using an easy to use extensionable platform. They will connect their wallet to log into their profile to see their transactions and to also activate the functionality of the debit card.

We use Lens protocol to enable social sharing of a user’s transactions. Once a user has connected their Len’s profile, Lens’ social graph allows users to see peer-to-peer transactions from their everyday life. This introduces a new and innovative way to advertise to close friends and family in web3 as opposed to email marketing and web2 paid advertisements.

We use Polygon to support the structure of the transaction data from Lens. Polygon, a leading platform for Ethereum, allows for Off Chain to have a secured infrastructure. Since we upload data to Lens, the data becomes automatically published on Polygon. Our front-end app creates opportunities for future development with Solidity that easily adapts to smart contracts.

