import React from "react";
import Card, {ICardItem} from "../components/Card";
import {IItem} from "./ItemsList";


function Item({
    item
} : {
    item: IItem
}) {
    const cardItem: ICardItem = {
        title: item.name,
        imagePath: item.imagePath,
        description: item.description
    }

    return (
        <Card
            title={cardItem.title}
            imagePath={cardItem.imagePath}
            description={cardItem.description}
        />
    )
}

export default Item
