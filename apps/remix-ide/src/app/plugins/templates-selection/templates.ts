export const templates = (intl) => {
  return [
    {
      name: "Generic",
      items: [
        { value: "remixDefault", tagList: ["Solidity"], displayName: intl.formatMessage({ id: 'filePanel.basic' }) },
        { value: "blank", displayName: intl.formatMessage({ id: 'filePanel.blank' }), IsArtefact: true }
      ]
    },
    {
      name: "OpenZeppelin",
      items: [
        {
          value: "ozerc20",
          displayName: "ERC20",
          tagList: ["ERC20", "Solidity"]
        },
        {
          value: "ozerc721",
          displayName: "ERC721 (NFT)",
          tagList: ["ERC721", "Solidity"]
        },
        {
          value: "ozerc1155",
          tagList: ["Solidity"],
          displayName: "ERC1155"
        },
        {
          value: "ozerc20",
          displayName: "ERC20",
          tagList: ["Solidity"],
          opts: {
            mintable: true
          }
        },
        {
          value: "ozerc721",
          displayName: "ERC721 (NFT)",
          tagList: ["Solidity", "ERC721"],
          opts: {
            mintable: true
          }
        },
        {
          value: "ozerc1155",
          displayName: "ERC1155",
          tagList: ["Solidity"],
          opts: {
            mintable: true
          }
        },
        {
          value: "ozerc20",
          displayName: "ERC20",
          tagList: ["Solidity", "ERC20"],
          opts: {
            mintable: true,
            burnable: true
          },
        },
        {
          value: "ozerc721",
          displayName: "ERC721 (NFT)",
          opts: {
            mintable: true,
            burnable: true
          },
          tagList: ["ERC721", "Solidity"]
        },
        {
          value: "ozerc1155",
          displayName: "ERC1155",
          opts: {
            mintable: true,
            burnable: true
          },
          tagList: ["ERC1155", "Solidity"]
        },
        {
          value: "ozerc20",
          displayName: "ERC20",
          opts: {
            mintable: true,
            pausable: true
          },
          tagList: ["ERC20", "Solidity"]
        },
        {
          value: "ozerc721",
          displayName: "ERC721 (NFT)",
          opts: {
            mintable: true,
            pausable: true
          },
          tagList: ["ERC721", "Solidity"]
        },
        {
          value: "ozerc1155",
          displayName: "ERC1155",
          tagList: ["ERC20"],
          opts: {
            mintable: true,
            pausable: true
          }
        }
      ]
    },
    {
      name: "OpenZeppelin Proxy",
      items: [
        {
          value: "ozerc20",
          displayName: "ERC20",
          opts: {
            upgradeable: 'uups'
          },
          tagList: ["ERC20", "Solidity"]
        },
        {
          value: "ozerc721",
          displayName: "ERC721 (NFT)",
          opts: {
            upgradeable: 'uups'
          },
          tagList: ["ERC721", "Solidity"]
        },
        {
          value: "ozerc1155",
          displayName: "ERC1155",
          opts: {
            upgradeable: 'uups'
          },
          tagList: ["ERC1155", "Solidity"]
        },
        {
          value: "ozerc20",
          displayName: "ERC20",
          opts: {
            upgradeable: 'uups',
            mintable: true
          },
          tagList: ["ERC20", "Solidity"]
        },
        {
          value: "ozerc721",
          displayName: "ERC721 (NFT)",
          opts: {
            upgradeable: 'uups',
            mintable: true
          },
          tagList: ["ERC721", "Solidity"]
        },
        {
          value: "ozerc1155",
          displayName: "ERC1155",
          opts: {
            upgradeable: 'uups',
            mintable: true
          },
          tagList: ["ERC1155", "Solidity"]
        },
        {
          value: "ozerc20",
          displayName: "ERC20",
          opts: {
            upgradeable: 'uups',
            mintable: true,
            burnable: true
          },
          tagList: ["ERC20", "Solidity"]
        },
        {
          value: "ozerc721",
          displayName: "ERC721 (NFT)",
          opts: {
            upgradeable: 'uups',
            mintable: true,
            burnable: true
          },
          tagList: ["ERC721", "Solidity"]
        },
        {
          value: "ozerc1155",
          displayName: "ERC1155",
          opts: {
            upgradeable: 'uups',
            mintable: true,
            burnable: true
          },
          tagList: ["ERC1155", "Solidity"]
        },
        {
          value: "ozerc20",
          displayName: "ERC20",
          opts: {
            upgradeable: 'uups',
            mintable: true,
            pausable: true
          },
          tagList: ["ERC20", "Solidity"]
        },
        {
          value: "ozerc721",
          displayName: "ERC721 (NFT)",
          opts: {
            upgradeable: 'uups',
            mintable: true,
            pausable: true
          },
          tagList: ["ERC721", "Solidity"]
        },
        {
          value: "ozerc1155",
          displayName: "ERC1155",
          opts: {
            upgradeable: 'uups',
            mintable: true,
            pausable: true
          },
          tagList: ["ERC1155", "Solidity"]
        },
        {
          value: "ozerc1155",
          displayName: "ERC1155",
          opts: {
            upgradeable: 'uups',
            mintable: true,
            burnable: true,
            pausable: true
          },
          tagList: ["ERC1155", "Solidity"]
        }
      ]
    },
    {
      name: "OxProject",
      items: [
        { value: "zeroxErc20", displayName: "ERC20", tagList: ["ERC20", "Solidity"]}
      ]
    },
    {
      name: "Gnosis Safe",
      items: [
        { value: "gnosisSafeMultisig", tagList: ["Solidity"], displayName: intl.formatMessage({ id: 'filePanel.multiSigWallet' }) }
      ]
    },
    {
      name: "Circom ZKP",
      items: [
        { value: "semaphore", tagList: ["ZKP"], displayName: intl.formatMessage({ id: 'filePanel.semaphore' }) },
        { value: "hashchecker", tagList: ["ZKP"], displayName: intl.formatMessage({ id: 'filePanel.hashchecker' }) },
        { value: "rln", tagList: ["ZKP"], displayName: intl.formatMessage({ id: 'filePanel.rln' }) }
      ]
    },
    {
      name: "Generic ZKP",
      items: [
        { value: "sindriScripts", tagList: ["ZKP"], displayName: intl.formatMessage({ id: 'filePanel.addscriptsindri' }) },
      ],
    },
    {
      name: "Uniswap V4",
      items: [
        { value: "uniswapV4Template", displayName: intl.formatMessage({ id: 'filePanel.uniswapV4Template' }) },
        { value: "breakthroughLabsUniswapv4Hooks", displayName: intl.formatMessage({ id: 'filePanel.breakthroughLabsUniswapv4Hooks' }) },
        { value: "uniswapV4HookBookMultiSigSwapHook", displayName: intl.formatMessage({ id: 'filePanel.uniswapV4HookBookMultiSigSwapHook' }) }
      ]
    },
    {
      name: "Solidity CREATE2",
      items: [
        { value: "contractCreate2Factory", tagList: ["Solidity"], displayName: intl.formatMessage({ id: 'filePanel.addcreate2solidityfactory' }) },
        { value: "contractDeployerScripts", displayName: intl.formatMessage({ id: 'filePanel.addscriptdeployer' }) }
      ]
    },
    {
      name: "Contract Verification",
      items: [
        { value: "etherscanScripts", displayName: intl.formatMessage({ id: 'filePanel.addscriptetherscan' }) },
      ],
    },
    {
      name: 'Github Actions',
      items: [
        { value: "runJsTestAction", displayName: intl.formatMessage({ id: 'filePanel.tssoltestghaction' }) },
        { value: "runSolidityUnittestingAction", displayName: intl.formatMessage({ id: 'filePanel.solghaction' }) },
        { value: "runSlitherAction", displayName: intl.formatMessage({ id: 'filePanel.slitherghaction' }) }
      ],
      IsArtefact: true
    }
  ]
}