import React, {useEffect, useState} from "react";
import Cards from "../components/Cards";
import Pet from "./Pet";
import PetService from "../service/pet";

export interface IPet {
    id: number | null,
    name: string | null,
    imagePath: string | null,
    description?: string
}

function createRenderItems(pets: Array<IPet>) {
    return () => (
        pets.map((pet: IPet, index: number) => (
            <Pet
                key={index}
                pet={pet}
            />
        ))
    )
}

function PetsList({
    title,
    entityType
} : {
    title: string,
    entityType: string
}) {

    const initialPets: Array<IPet> = [{
        id: null,
        name: null,
        imagePath: null
    }]

    const [pets, setPets] = useState(initialPets);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        if (entityType === "DOGS") {
            PetService.mockDogs().then(res => {
                setPets(res);
                setLoading(false);
            })
        } else if (entityType === "CATS") {
            PetService.mockCats().then(res => {
                setPets(res);
                setLoading(false);
            })
        }
    }, [pets])


    return (
        <>
            {
                !loading &&
                <Cards title={title}
                   renderItems={createRenderItems(pets)}
                />
            }
        </>
    )
}

export default PetsList
