module.exports = {
    develop: [
        'overview',
        {
            type: 'category',
            label: 'Get started',
            items: [
                'get-started/tutorials',
                'get-started/full-node-deployment',
                'get-started/run-archive-node',
                'get-started/hawaii-hard-fork',
                'get-started/upgrade-full-node',
                'get-started/bootnode-list',
                'get-started/installation',
                'get-started/performance-reports',
            ]
        },
        {
            type: 'category',
            label: 'Configuration',
            items: [
                'configuration/manage-private-keys',
                'configuration/set-up-hashicorp-vault',
                'configuration/enable-metrics',
            ]
        },
        {
            type: 'category',
            label: 'Working with a node',
            items: [
                'working-with-node/query-json-rpc',
                'working-with-node/query-operator-info',
                'working-with-node/backup-restore',
            ]
        },
        {
            type: 'category',
            label: 'Consensus',
            items: [
                'consensus/poa',
                'consensus/pos-concepts',
                'consensus/pos-stake-unstake',
                'consensus/migration-to-pos'
            ]
        },
        {
            type: 'category',
            label: 'Additional features',
            items: [
                'additional-features/dogecoin-bridge',
                'additional-features/blockscout',
                'additional-features/stress-testing'
            ]
        },
        {
            type: 'category',
            label: 'Architecture',
            items: [
                'architecture/overview',
                {
                    type: 'category',
                    label: 'Modules',
                    items: [
                        'architecture/modules/blockchain',
                        'architecture/modules/minimal',
                        'architecture/modules/networking',
                        'architecture/modules/state',
                        'architecture/modules/txpool',
                        'architecture/modules/json-rpc',
                        'architecture/modules/consensus',
                        'architecture/modules/storage',
                        'architecture/modules/types',
                        'architecture/modules/other-modules'
                    ]
                }
            ]
        },
        {
            type: 'category',
            label: 'Concepts',
            items: [
                'concepts/ethereum-state'
            ]
        },
        {
            type: 'category',
            label: 'Community',
            items: [
                'community/propose-new-feature',
                'community/report-bug',
                'community/create-a-dog20-coin'
            ]
        },
    ]
};
