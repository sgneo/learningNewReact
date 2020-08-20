import React from "react";
import Cards from "../components/Cards";
import Item from "./Item";
import { ICardItem } from "../components/Card";

const rawItems = [{
    id: 0,
    name: "Rex",
    imagePath: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
}, {
    id: 1,
    name: "Labus",
    imagePath: "https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long.jpg"
}]

export interface IItem {
    id: number,
    name: string,
    imagePath: string,
    description?: string
}


function createRenderItems(items: Array<IItem>) {
    return () => (
        items.map((item: IItem, index: number) => (
            <Item
                key={index}
                item={item}
            />
        ))
    )
}

function ItemsList() {
    const items: Array<IItem> = rawItems;

    return (
        <>
            <Cards title="I am items list"
               renderItems={createRenderItems(items)}
            />
        </>
    )
}

export default ItemsList
