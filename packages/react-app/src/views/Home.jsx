import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { CowSdk, OrderKind } from "@cowprotocol/cow-sdk";

const cowSdk = new CowSdk(5);


/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  // Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
 
  

  const doStuff = useCallback(async ()=> {
    const order = await cowSdk.cowApi.getOrder('0x2286a105f4b95d872fea33bed0ebab7a78c57ffa8d3bbf26c340e1e2668249bab1fe4ccdb48c11a41cab60d698cb71d5f6536a2e6341e952')
  //  const quoteResponse = await cowSdk.cowApi.getQuote({
    //  kind: OrderKind.SELL, // Sell order (could also be BUY)
      //from: "",
     // sellToken: '0xc778417e063141139fce010982780140aa0cd5ab', // WETH
      //buyToken: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b', // USDC
      //amount: '1000000000000000000', // 1 WETH
      //userAddress: '0xec478CE1aC9E01eD5aeccFB82229Af7fA8e17761', // user account
      //validTo: 2524608000,

    //})
   // const { sellToken, buyToken, validTo, buyAmount, sellAmount, receiver, feeAmount } = quoteResponse.quote 
    
  
    console.log('Order:', order)
  }, [cowSdk])

  return (
    <div>
      <div style={{ margin: 32 }}>
        This is where you will authorize how much money to switch into Fiat
      </div>
      <button onClick={doStuff}>SDK</button>
    </div>
    
  );
}

export default Home;
