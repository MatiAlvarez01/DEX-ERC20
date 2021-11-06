import React from "react";
import styled from "styled-components";
import AllTradesText from "../Texts/AllTrades/AllTradesText";

function AllTrades() {
    return (
        <MainSection>
            <TitleDiv>
                <AllTradesText 
                    text={"All trades"}
                />
                <HrLine />
            </TitleDiv>
            <div>
                <p>Graph</p>
            </div>
            <div>
                <p>history</p>
            </div>
        </MainSection>
    )
}

export default AllTrades;

const MainSection = styled.section`
    background-color: #141414;
    width: 67%;
    border-radius: 10px;
    padding-left: 30px;
    color: #FDFDFD;
`
const TitleDiv = styled.div`
`
const HrLine = styled.hr`
    height: 15px;
    background-color: #681CD3;
    border: none;
    margin: 0;
    width: 95%;
`