// imports
const { ethers } = require("hardhat")

//async main

async function main() {
  const MyNft = await ethers.getContractFactory("MyNFT");
  const myNft = await MyNft.deploy();
  await myNft.deployed();

  console.log(`deployed NFT address : ${myNft.address}`);

  const MyToken=await ethers.getContractFactory("MyToken");
  const myToken=await MyToken.deploy(myNft.address);
  await myToken.deployed();

  console.log(`deployed token address : ${myToken.address}`);
}

//main

main().then(() => process.exit(0)).catch(() => {
  console.error(e);
  process.exit(1)
})

// deployed NFT address : 0x5FbDB2315678afecb367f032d93F642f64180aa3
// deployed token address : 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512