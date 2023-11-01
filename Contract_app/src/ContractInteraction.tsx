import React, { useState } from "react";
import { useContractFunction, useSigner } from "@usedapp/core";
import { ethers } from "ethers";
import { Contract_ABI, Contract_ADDRESS } from './config';
import { Box, Button, Input, InputLabel } from "@mantine/core";
import { Image } from '@mantine/core';

const ContractInteraction: React.FC = () => {
  // const { account, chainId, library } = useEthers();
  // const contract = new ethers.Contract(Contract_ADDRESS, Contract_ABI, library);
  const signer = useSigner();
  const contract = new ethers.Contract(Contract_ADDRESS, Contract_ABI, signer);
  //==================================================================
  const [newText, setNewText] = useState("");
  const { send } = useContractFunction(contract, "write");
  const handleWriteText = async () => {
    await send(newText);
  };
  //==================================================================
  const [contractName, setContractName] = useState("");
  const getContractName = async () => {
    const name = await contract.callk();
    console.log("Contract Name:", name);
    setContractName(name);
  };
  //==================================================================
  const [text, settext] = useState("");
  const getReadText = async () => {
    const text = await contract.readText();
    console.log("Read Text Input:", text);
    settext(text);
  };
  //==================================================================
  return (
    <>
    <Image radius="md" w={180} fit="contain" src={"./public/imagedsef.png"} />
      <h1>Smart Contract Interaction</h1>
      <Box bg="blue.2"  style={{borderRadius:"15px" , paddingTop:"20px" , paddingBottom:"20px",margin:"auto"}}>
      <div style={{ justifyContent: "space-between", display: "flex", alignItems: "center" , marginLeft:"250px", marginRight:"250px"}}>
      <InputLabel size="lg">New Text: </InputLabel>
      <Input size="sm" w="500" type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
      <Button variant="filled" radius="md" onClick={handleWriteText}>Write Text</Button>
      </div>

      {contractName === "" ? (
        <div style={{ justifyContent: "space-between", display: "flex", alignItems: "center" , marginLeft:"350px", marginRight:"400px",marginTop:"10px"}}>
          <InputLabel size="lg">Click Button to see contract name: {contractName}</InputLabel>
          <Button variant="filled" radius="md" onClick={getContractName}>Get Contract Name</Button>
        </div>
      ) : (
        <div style={{ justifyContent: "space-between", display: "flex", alignItems: "center" , marginLeft:"350px", marginRight:"400px",marginTop:"10px"}}>
          <InputLabel size="lg">contract Name: {contractName}</InputLabel>
          <Button variant="filled" radius="md" onClick={getContractName}>Get Contract Name</Button>
        </div>
      )}

      {text === "" ? (
        <div style={{ justifyContent: "space-between", display: "flex", alignItems: "center" , marginLeft:"380px", marginRight:"425px",marginTop:"10px"}}>
          <InputLabel size="lg">Click Button to see Text Input: {text}</InputLabel>
          <Button variant="filled" radius="md" onClick={getReadText}>Get Text Input:</Button>
        </div>
      ) : (
        <div style={{ justifyContent: "space-between", display: "flex", alignItems: "center" , marginLeft:"350px", marginRight:"400px",marginTop:"10px"}}>
          <InputLabel size="lg">Text Input: {text}</InputLabel>
          <Button variant="filled" radius="md" onClick={getReadText}>Get Text Input:</Button>
        </div>
      )}
      </Box>
    </>
  );
};

export default ContractInteraction;
