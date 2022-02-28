async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const Token = await ethers.getContractFactory("NFT_looking");
    const token = await Token.deploy("cuadro1", "CIRIA");
    console.log("Token address:", token.address);

    for (let i = 0; i <= 401; i++) {
        await token.safeMint(deployer.address, i.toString());
    };
    
    return token;
  }
  
  main()
    .then(async token => {
        const [deployer] = await ethers.getSigners();
        console.log("supply:", (await token.totalSupply()).toString())
        console.log("cost:", 10000 - ethers.utils.formatEther(await deployer.getBalance()));
        process.exit(0)
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });