import {ethers} from 'ethers';
const {ethereum} = window;

let provider;
let signer

if(!ethereum){
    console.log('Please install metamask!');
} else {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner();
}

export {
    provider,
    signer
}
