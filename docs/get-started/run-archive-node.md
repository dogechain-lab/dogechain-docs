---
id: run-archive-node
title: Run Archive Node
---

## What is an archive node?

Simply speaking, an archive node is a full node running with an additional special option, `--gcmode archive`. It stores all the historical data of the blockchain starting from the genesis block. As compared to a typical full node that just holds all the state change data for some latest blocks, an archive node always stores them for each block.

## Why is an archive node important?

Developers are limited to querying the limited recent blocks to check the balance of an address and the state of a smart contract with a full node. It is hard to get all what they want as the blockchain is moving forward at the same time, while they can query any block at a specific point in time with an archive node. Archive nodes are used by various applications on the blockchain for challenging use cases, including but not limited to the followings:

- Automatic trading system needs historical data to optimize trading model
- Verification modules need state data to verify transactions in time
- Analytical tools need full historical data to do data analysis
- Exchange in some wallets depends on archive node for fast and efficient transfers

## Suggested Requirements

Running an archive node will take a high cost as it includes all the block and state change data.

First of all it needs the disk with sufficient capacity; besides this, the CPU and disk performance should be good enough to catch up with the latest block height.

## How to run an archive node for Dogechain mainnet?

#### 1. Run one segment archive node with a snapshot

A segment archive node is a node which has all the data from one starting block height to one ending block height, such as [19000000, latest]. To create such one archive node, you need a snapshot with starting block number, less than 19000000.

You can get snapshot from BNB Chain official documentation:

- [Dogechain Chain Snapshot Repo](https://github.com/dogechain-lab/dogechain-snapshots).

- Command to run:

```bash
/usr/local/bin/geth \
	--config=${local_config_dir}/config.toml \
	--datadir=${local_data_dir} \
	--rpc.allow-unprotected-txs \
	--rpccorsdomain=* \
	--rangelimit \
	--syncmode=full \
	--gcmode=archive \
	--txlookuplimit=0 \
	--txpool.pricelimit=250000000000 \
	--miner.gasprice=250000000000 \
	--miner.gaslimit=300000000
```

#### 2. Build one full archive node with segmented archive nodes

Instead of putting all archive data on a single Geth instance, it is suggested to create multiple segment instances, each of them only serving part of the chain. To get better performance, it is suggested that each segment's size is better to control under 4TB. There will be around 2.7TB data in all(up to October, 2023).

