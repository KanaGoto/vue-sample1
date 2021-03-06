import Web3 from 'web3'
import {address, ABI} from './constants/traceContract'

let getContract = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let traceContractInstance = new web3.eth.Contract(ABI, address)
    // traceContractInstance = () => traceContractInstance
    resolve(traceContractInstance)
})
export default getContract