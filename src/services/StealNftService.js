import stealNftAbiRaw from '../assets/abis/StealNftAbi.json';
import { ethers } from 'ethers';
import { STEAL_NFT_CONTRACT_ADDRESS } from '../util/Constants';
import web3 from 'web3';

const stealNftAbi = JSON.stringify(stealNftAbiRaw);

const getStealPrice = async (provider) => {
    const stealNftContractAddress = STEAL_NFT_CONTRACT_ADDRESS[(await provider.getNetwork()).name];
    const stealNftContract = new ethers.Contract(stealNftContractAddress, stealNftAbi, provider);

    try {
        return "" + web3.utils.fromWei(await stealNftContract.getStealNftPrice(), 'ether');
    } catch (err) {
        console.log(err);
        return "???";
    }
};

const stealNft = async (provider, collectionAddress, nftId, destinationAddress, price) => {
    const stealNftContractAddress = STEAL_NFT_CONTRACT_ADDRESS[(await provider.getNetwork()).name];
    const stealNftContract = new ethers.Contract(stealNftContractAddress, stealNftAbi, await provider.getSigner());

    try {
        await stealNftContract.steal(collectionAddress, nftId, destinationAddress, {value: web3.utils.toWei(Number(price), 'ether')});
    } catch (err) {
        console.log("Please double check your input data...");
    }
};

const StealNftService = {
    getStealPrice,
    stealNft
};

export default StealNftService;