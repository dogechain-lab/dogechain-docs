---
id: overview 
title: Jury
sidebar_label: Overview
---

Jury is a modular and extensible framework for building Ethereum-compatible blockchain networks, sidechains, and general scaling solutions.

Its primary use is to bootstrap a new blockchain network while providing full compatibility with Ethereum smart contracts and transactions. It uses IBFT (Istanbul Byzantine Fault Tolerant) consensus mechanism, supported in two flavours as [PoA (proof of authority)](/docs/consensus/poa) and [PoS (proof of stake)](/docs/consensus/pos-stake-unstake).

Industry standard wallets can be used to interact with Jury through the [JSON-RPC](/docs/working-with-node/query-json-rpc) endpoints and node operators can perform various actions on the nodes through the [gRPC](/docs/working-with-node/query-operator-info) protocol.

To find out more about dogechain-lab, visit the [official website](https://dogecoin.community).

## Dogechain testnet
* Explorer: https://explorer-testnet.dogechain.dog
* Chain ID:  568
* Json RPC:  https://rpc-testnet.dogechain.dog
* Faucet:  https://faucet.dogechain.dog

**[GitHub repository](https://github.com/dogechain-lab/jury)**

:::caution

This is a work in progress so architectural changes may happen in the future. The code has not been audited
yet, so please contact the dogechain-lab team if you would like to use it in production.

:::



To get started by running a `jury` network locally, please read: [Installation](/docs/get-started/installation) and [Local Setup](/docs/get-started/set-up-ibft-locally).
