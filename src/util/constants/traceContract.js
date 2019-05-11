const address = "0x289deA5Ab5201631C251dE8CC107501fbB43cbbD"
const ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "seq",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "traceIdArr",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "from",
        "type": "address"
      },
      {
        "name": "item",
        "type": "string"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "createTraceInfo",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "traceId",
        "type": "uint256"
      },
      {
        "name": "from",
        "type": "address"
      },
      {
        "name": "item",
        "type": "string"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "addTraceInfo",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "traceId",
        "type": "uint256"
      }
    ],
    "name": "viewTraceInfo",
    "outputs": [
      {
        "components": [
          {
            "name": "traceId",
            "type": "uint256"
          },
          {
            "components": [
              {
                "name": "from",
                "type": "address"
              },
              {
                "name": "to",
                "type": "address"
              },
              {
                "name": "item",
                "type": "string"
              },
              {
                "name": "amount",
                "type": "uint256"
              },
              {
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "name": "details",
            "type": "tuple"
          }
        ],
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
export {address, ABI}
