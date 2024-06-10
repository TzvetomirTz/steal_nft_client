import stealNftAbiRaw from '../assets/abis/StealNftAbi.json';
import { ethers } from 'ethers';
import { STEAL_NFT_CONTRACT_ADDRESS } from '../util/Constants';
import web3 from 'web3';

const stealNftAbi = JSON.stringify(stealNftAbiRaw);

const getStealPrice = async (provider) => {
    // const signer = await provider.getSigner();
    const stealNftContractAddress = STEAL_NFT_CONTRACT_ADDRESS[(await provider.getNetwork()).name];
    const stealNftContract = new ethers.Contract(stealNftContractAddress, stealNftAbi, provider);

    try {
        return "" + web3.utils.fromWei(await stealNftContract.getStealNftPrice(), 'ether');
    } catch (err) {
        console.log(err);
        return "???";
    }
};

const StealNftService = {
    getStealPrice
};

export default StealNftService;