---
id: dogecoin-bridge
title: Dogecoin bridge
---

Bridge is a centralized bridge of native tokens, which allows users to transfer native dogecoin assets to another chain.


## Service
The wallet signs according to the rules and binds the recharge wallet address of the native token dogecoin.

## Transfer
The minimum recharge value of the native token is 100 dogecoin. When the transaction is synchronized, multiple administrators will sign and confirm the transaction and call the deposit of the bridge contract to write data. After more than half of the administrators confirm, the native token will be added to the recharge address specified by the user.

## Contract
Call the withdraw of the bridge contract to destroy the native token of the EVM chain, and the redeemed native token will be transferred to the designated address of the dogechain chain.


## Architecture

<div style={{textAlign: 'center'}}>

![ChainBridge Architecture](/img/deposit.svg)
*ChainBridge Deposit*

</div>

<div style={{textAlign: 'center'}}>

![Workflow of ERC20 token transfer](/img/withdraw.svg)
*ChainBridge Withdraw*

</div>

