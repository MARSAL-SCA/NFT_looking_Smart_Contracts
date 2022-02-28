async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const beforeBalance = ethers.utils.formatEther(await deployer.getBalance());
  
    const Token = await ethers.getContractFactory("NFT_looking");
    const token = await Token.deploy("cuadro1", "CIRIA");
  
    console.log("Token address:", token.address);
    console.log("initial balance:", beforeBalance);
    console.log("cost:", beforeBalance -  ethers.utils.formatEther(await deployer.getBalance()));
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });