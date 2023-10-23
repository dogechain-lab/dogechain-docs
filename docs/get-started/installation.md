---
id: installation
title: Installation
---

Please refer to the installation method more applicable to you.

Our recommendation is to use the pre-built releases and verify the provided checksums.

## Pre-built releases

Dogechain comes with cross-compiled AMD64/ARM64 binaries for Darwin and Linux.

### V2

Please refer to the [GitHub Releases](https://github.com/dogechain-lab/dbsc/releases) page for a list of releases.

### V1

**Deprecated**, will be deleted after Hawaii Fork. Please refer to the [GitHub Releases](https://github.com/dogechain-lab/dogechain/releases) page for a list of releases.

---

## Docker image

### V2

To be done.

### V1

**Deprecated**. Official Docker images are hosted under the [hub.docker.com registry](https://hub.docker.com/r/dogechainlab/dogechain).

`docker pull dogechainlab/dogechain:latest`

---

## Building from source

Prior to using `go install` make sure that you have Go `>=1.19` installed and properly configured.

The stable branch is `dev`.

```shell
git clone https://github.com/dogechain-lab/dbsc.git
cd dbsc/
make geth
sudo cp ./build/bin/geth /usr/local/bin # or any other PATH you want
```
