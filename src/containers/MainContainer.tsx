import React, {useState} from "react";
import PetsList from "./PetsList";


function MainContainer() {
    return (
        <main>
            <h1>I am Main</h1>
            <PetsList
                title={"Cutest Dogs"}
                entityType={"DOGS"}
            />

            <PetsList
                title={"Cutest Cats"}
                entityType={"CATS"}
            />

        </main>
    )
}

export default MainContainer
