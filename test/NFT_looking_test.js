const { expect } = require("chai");

describe("NFT_looking test", () => {
  beforeEach(async () => {
    [owner, randomOwner] = await ethers.getSigners();

    const myNFT_looking = await ethers.getContractFactory("NFT_looking");
    NFT_looking = await myNFT_looking.deploy("cuadro1", "CIRIA");
    token = await NFT_looking.deployed();
  });

  it("Should return the right name and symbol", async () => {
    expect(await token.name()).to.equal("cuadro1");
    expect(await token.symbol()).to.equal("CIRIA");
  });

  it("Should return a totalSupply of 0", async () => {
    expect(await token.totalSupply()).to.equal(0);
  });

  it("should have the right owners when mint", async () => {
    await token.safeMint(owner.address, "0");
    await token.safeMint(randomOwner.address, "1");
    expect(await token.ownerOf(0)).to.be.equal(owner.address)
    expect(await token.ownerOf(1)).to.be.equal(randomOwner.address)
  });

  it("should return the right tokenURI", async () => {
    await token.safeMint(owner.address, "0");
    expect(await token.tokenURI(0)).to.be.equal("https://1qr5qhicb7.execute-api.eu-central-1.amazonaws.com/prod/api/ciria/cuadro1/0")
  });

  it("shouldn't mint more than 400 NFT's", async () => {
    
    for (let i = 0; i <= 402; i++) {
      
      if(i <= 400){
        await token.safeMint(owner.address, i.toString());
      } else {
        await expect(
          token.safeMint(owner.address, i.toString())
        ).to.be.revertedWith("ERC721: max total supply reached");
        expect(await token.totalSupply()).to.equal(401);
        expect(await token.tokenURI(400)).to.be.equal("https://1qr5qhicb7.execute-api.eu-central-1.amazonaws.com/prod/api/ciria/cuadro1/400")
      }

    };

  });

});