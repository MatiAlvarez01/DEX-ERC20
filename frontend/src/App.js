import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getBlockchain from "./ethereum";
import Loading from "../src/components/Loading/Loading";
import Header from "./components/Header/Header";
import Wallet from "./components/Wallet/Wallet";
import AllTrades from "./components/AllTrades/AllTrades";

function App() {
  const [dex, setDex] = useState(undefined);
  const [tokens, setTokens] = useState(undefined);
  const [tokenSelected, setTokenSelected] = useState("none");

  useEffect(() => {
    const init = async () => {
      const { dex } = await getBlockchain();
      const tokens = await dex.getTokens();

      setDex(dex);
      setTokens(tokens)
    }
    init();
  }, [])

  console.log("dex: ", dex);
  console.log("tokens: ", tokens)
  console.log("token selected: ", tokenSelected)
  
  if (
    typeof dex === "undefined" ||
    typeof tokens === "undefined"
  ) { return <Loading /> }

  return (
    <MainSection>
      <Header 
        tokens={tokens}
        tokenSelected={tokenSelected}
        setTokenSelected={setTokenSelected}
      />
      {tokenSelected !== "none" ? 
        <DatasDiv>
          <Wallet 
            tokens={tokens}
            tokenSelected={tokenSelected}

          />
          <AllTrades 
            tokens={tokens}
            tokenSelected={tokenSelected}

          />
        </DatasDiv> : 
        null
      }
    </MainSection>
  );
}

export default App;

const MainSection = styled.section`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const DatasDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`
