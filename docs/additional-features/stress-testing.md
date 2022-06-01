---
id: stress-testing
title: Network stress testing
---

## Prerequisites

This guide assumes that:

- You have a working dogechain network up and running
- Both your JSON-RPC and GRPC endpoints are reachable

## Overview

The dogechain Loadbot is a helper utility that is meant to stress test a dogechain network.

Currently, it supports 2 modes:

- `transfer` - mode that does stress testing using fund-transfer transactions. **[Default]**.
- `deploy` - mode that deploys specified smart contracts with each transaction.

### Transfer Mode

The transfer mode assumes that there is a sender account that has initial funds to conduct the loadbot run.

The sender's account address and private key need to be set in the environment variables:

```bash
# Example
export LOADBOT_0x9A2E59d06899a383ef47C1Ec265317986D026055=154c4bc0cca942d8a0b49ece04d95c872d8f53d34b8f2ac76253a3700e4f1151
```

### Deploy Mode

The deploy mode conducts contract deployment with each new transaction in the loadbot run.
The contract being deployed can be specified using [specific flags](/docs/get-started/cli-commands#loadbot-flags), or if the contract path is omitted, a default 
`Greeter.sol` [contract](https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-core/sample-projects/basic/contracts/Greeter.sol) is used instead.

### Terminology

This section covers some basic terminology regarding the loadbot configuration.

- **count** - The number of transactions to be submitted in the specified mode
- **tps** - The number of transactions that should be submitted to the node per second

## Start the loadbot

### Transfer CASE
As an example, here is a valid command you can use to run the loadbot using two premined accounts:
```bash
dogechain loadbot --jsonrpc http://127.0.0.1:8545 --grpc-address 127.0.0.1:9632 --chain-id 568 --gas-price 100000000000 --sender 0x0Ea680527b44D598804c4a85C5d6695d2dd1Ef51 --receiver 0x7680d9649A1F09754e5Be58ed7d49554e82dAB03 --count 5000 --value 0x100 --tps 300
```

You should get a result similar to this on your terminal :
```bash
=====[LOADBOT RUN]=====

[COUNT DATA]
Transactions submitted = 5000
Transactions failed    = 0

[APPROXIMATE TPS]
Approximate number of transactions per second = 250

[TURN AROUND DATA]
Average transaction turn around = 3.022550s
Fastest transaction turn around = 1.007790s
Slowest transaction turn around = 4.027790s
Total loadbot execution time    = 20.863140s

[BLOCK DATA]
Blocks required = 10

Block #3913 = 47 txns
Block #3914 = 622 txns
Block #3915 = 830 txns
Block #3916 = 325 txns
Block #3917 = 609 txns
Block #3918 = 666 txns
Block #3919 = 627 txns
Block #3920 = 587 txns
Block #3921 = 558 txns
Block #3922 = 129 txns
```

### Deploy CASE
As an example, here is a valid command you can use to run the loadbot using two premined accounts:
```bash
dogechain loadbot --mode deploy ---jsonrpc http://127.0.0.1:8545 --grpc-address 127.0.0.1:9632 --chain-id 568 --gas-price 100000000000 --sender 0x0Ea680527b44D598804c4a85C5d6695d2dd1Ef51 --receiver 0x7680d9649A1F09754e5Be58ed7d49554e82dAB03 --count 200 --value 0x100 --tps 10
```

You should get a result similar to this on your terminal :
```bash
=====[LOADBOT RUN]=====

[COUNT DATA]
Transactions submitted = 200
Transactions failed    = 0

[APPROXIMATE TPS]
Approximate number of transactions per second = 8

[TURN AROUND DATA]
Average transaction turn around = 3.010510s
Fastest transaction turn around = 1.003420s
Slowest transaction turn around = 6.014310s
Total loadbot execution time    = 23.308750s

[BLOCK DATA]
Blocks required = 10

Block #84541 = 4 txns
Block #84542 = 21 txns
Block #84543 = 32 txns
Block #84544 = 10 txns
Block #84545 = 17 txns
Block #84546 = 24 txns
Block #84547 = 23 txns
Block #84548 = 14 txns
Block #84549 = 19 txns
Block #84551 = 36 txns
```