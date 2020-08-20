import React from "react";
import Card, {ICardItem} from "../components/Card";
import {IPet} from "./PetsList";


function Pet({
    pet
} : {
    pet: IPet
}) {
    const cardItem: ICardItem = {
        title: pet.name,
        imagePath: pet.imagePath,
        description: pet.description
    }

    return (
        <Card
            title={cardItem.title}
            imagePath={cardItem.imagePath}
            description={cardItem.description}
        />
    )
}

export default Pet
