import React from "react";
import Web3 from "web3";
import styled from "styled-components";
import WalletText from "../Texts/Wallet/WalletText";
import WalletTokenText from "../Texts/Wallet/WalletTokenText";
import TransferTokenText from "../Texts/Wallet/TransferTokenText";
import SubmitButton from "./SubmitButton";

function Wallet({tokens, tokenSelected}) {
    return (
        <MainSection>
            <TitleDiv>
                <WalletText 
                    text="Wallet"
                />
                <HrLine />
            </TitleDiv>
            <TextDiv>
                <WalletTokenText 
                    text={Web3.utils.hexToUtf8(tokens[tokenSelected].ticker)}
                />
            </TextDiv>
            <div>
                <SpaceBetweenDiv>
                    <LeftDiv>
                        <p>Wallet</p>
                    </LeftDiv>
                    <RightDiv>
                        <p>value</p>
                    </RightDiv>
                </SpaceBetweenDiv>
                <SpaceBetweenDiv>
                    <LeftDiv>
                        <p>Dex</p>
                    </LeftDiv>
                    <RightDiv>
                        <p>value</p>
                    </RightDiv>
                </SpaceBetweenDiv>
            </div>
            <TextDiv>
                <TransferTokenText 
                    text={Web3.utils.hexToUtf8(tokens[tokenSelected].ticker)}
                />
            </TextDiv>
            <div>
                <SpaceBetweenDiv>
                    <LeftDiv>
                        <p>Direction</p>
                    </LeftDiv>
                    <RightDiv>
                        <p>Deposit/Withdraw</p>
                    </RightDiv>
                </SpaceBetweenDiv>
                <SpaceBetweenDiv>
                    <LeftDiv>
                        <p>Amount</p>
                    </LeftDiv>
                    <RightDiv>
                        <p>Input/value</p>
                    </RightDiv>
                </SpaceBetweenDiv>
            </div>
            <ButtonDiv>
                <SubmitButton />
            </ButtonDiv>
        </MainSection>
    )
}

export default Wallet;

const MainSection = styled.section`
    background-color: #141414;
    width: 30%;
    border-radius: 10px;
`
const TitleDiv = styled.div`
    padding-left: 10px;
`
const HrLine = styled.hr`
    height: 15px;
    background-color: #681CD3;
    border: none;
    margin: 0;
    width: 95%;
`
const TextDiv = styled.div`
    padding-left: 10px;
`
const ButtonDiv = styled.div`
    text-align: right;
    margin: 15px 0px;
    padding-right: 30px;
`
const SpaceBetweenDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between
`
const LeftDiv = styled.div`
    width: 30%;
    padding-left: 10px;
    color: #FDFDFD;
`
const RightDiv = styled.div`
    width: 70%;
    padding-left: 10px;
    color: #FDFDFD;
`