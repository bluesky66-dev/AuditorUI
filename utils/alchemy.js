import { Network, Alchemy } from "alchemy-sdk";
import process from "process";

const settings = {
	apiKey: process.env.ALCHEMY_API_KEY,
	network: Network["FOUNDRY"],
};

const alchemy = new Alchemy(settings);

export default alchemy;
