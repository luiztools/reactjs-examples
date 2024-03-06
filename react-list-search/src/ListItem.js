import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    border-radius: 4px; 
    background-color: #fff; 
    height: 120px; 
    width: 262px; 
    color: #29303b; 
    margin-bottom: 10px; 
    margin-right: 10px; 
    padding: 10px;
`;

const Thumbnail = styled.img`
    width: auto;
    height: 100%;
    border: 0;
    vertical-align:
    middle; float:
    left; margin-right: 10px;
`;

const TitlePane = styled.div`
    font-weight: 700;
    margin-bottom: 5px;
`;

const PricePane = styled.div`
    margin-bottom: 5px;
`;

const ItemLink = styled.a`
    text-decoration: none;
`;

function ListItem(props) {
    return (
        <ItemLink href={props.url} title="Clique para comprar">
            <ItemContainer>
                <Thumbnail src={props.image} />
                <TitlePane>{props.title}</TitlePane>
                <PricePane>R$ {props.price}</PricePane>
            </ItemContainer>
        </ItemLink>
    );
}

export default ListItem;