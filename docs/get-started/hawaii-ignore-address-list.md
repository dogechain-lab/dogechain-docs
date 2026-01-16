---
id: hawaii-ignore-address-list
title: Hawaii Ignore Address List
---

After Hawaii Hard Fork, we still get some historical legacy whose state tree is too big to handled.

Recently, we still need to ignore these contracts' transactions to avoid bringing down the entire network, but new contracts should not be affected.

The ignored accounts and contracts are as below:

```go
[
    "0x78F05ACD03b4Dc51db68527aFDE64EB2F07938e4",
    "0x51f253AE4c7c8c60A3B4466b556FCC3760627409",
    "0xA54d7d28BBA53F816b2D8cF306AA985ddfc427e7",
    "0xdDAD550986884040049BCB7c7Db4cA3be9199636",
    "0x5b3686777C0bEfACC02e826d7E98a72ed1970Dc8",
    "0x06136a3aE935059b1b55dDc4009979a1f6a988EF",
    "0x5516505aeE1B6619FF9245b09920527e20a65d93",
    "0x7507bF61C5D02269B241a49519Ea311AEC53E5a9",
    "0xB0E218a84F7875A9e1d6eBE7AA261DfbE93031b1",
    "0xa77C4cdd935CC30D0b7186c42611bDd255d440e9",
    "0x95b8DD8865CA0C1bB115B30321B2324e66613505"
]
```
