---
id: requirements
title: Requirements
---

This guide walks through the setup for a bridge between a running Doge-EVM PoS (Mumbai testnet) and a local Jury network.

## Requirements

In this guide, you will run Jury nodes, ChainBridge relayer, and cb-sol-cli tool which is a CLI tool to deploy contracts locally. The following environments are required before starting setup.

* Go: >= 1.16
* Node.js >= 16.13.0
* Git

In addition, you need to clone the following repositories with the versions to run some applications.

* [Jury](https://github.com/doge-evm/jury.git): on the `dev` branch
* [ChainBridge](https://github.com/ChainSafe/ChainBridge): v1.1.5
* [ChainBridge Deploy Tools](https://github.com/ChainSafe/chainbridge-deploy): `f2aa093` on `main` branch

You need to setup a Jury network before proceeding to the next section. Please check [Local Setup](/docs/get-started/set-up-ibft-locally) or [Cloud Setup](/docs/get-started/set-up-ibft-on-the-cloud) for more details. 

## Accounts

In this guide, you will use three types of Ethereum accounts in both blockchain networks. Please make sure the accounts have enough native tokens to create transactions before starting. An account can act in several roles at the same time.

| **Type** |**Description**                                                                                                                |
|----------|-------------------------------------------------------------------------------------------------------------------------------|
| admin    | The account that deploys Bridge contract. This account will be given `admin` role as default and will be able to do certain actions in Bridge. The admin account pays the gas fees when deploying contracts, registering resource IDs, updating settings in the contracts, or minting tokens. |
| relayer  | The account used in the relayer to create transactions to vote or execute a proposal. The relayer accounts pay gas fees when sending transactions for voting and execution in the destination chain.                                                 |
| user     | The sender/recipient account that sends/receives assets. The sender account pays the gas fees when approving token transfers and calling `deposit` in the Bridge contract to begin a transfer.                                                                    |

Please make sure the accounts have enough native tokens to create transactions before starting. In Jury, you can assign accounts premined balances when generating the genesis block.
