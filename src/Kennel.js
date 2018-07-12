import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"
import OwnersList from "./OwnersList"
import PetFamilies from "./PetFamilies"


export default class Kennel extends Component {

    state = {
        employees: [
            { id: 1, name: "Jessica Younker" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe LeBlanc" },
            { id: 4, name: "Blaise Roberts" }
        ],
        locations: [
            { id: 1, name: "Nashville North" },
            { id: 2, name: "Nashville South" }
        ],
        animals: [
            { id: 1, name: "Doodles" },
            { id: 2, name: "Jack" },
            { id: 3, name: "Angus" },
            { id: 4, name: "Henley" },
            { id: 5, name: "Derkins" },
            { id: 6, name: "Checkers" }
        ],
    owners: [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ],
    petFamilies: [
        { id: 1, ownersId:1, animalsId:1 },
        { id: 2, ownersId:2, animalsId:2 },
        { id: 3, ownersId:3, animalsId:3 },
        { id: 4, ownersId:4, animalsId:4 },
        { id: 5, ownersId:5, animalsId:5 },
        { id: 6, ownersId:6, animalsId:6 }
    ]
    }

    render() {
        return (
            <React.Fragment>
                <EmployeeList employees={this.state.employees} />
                <LocationList locations={this.state.locations} />
                <AnimalList animals={this.state.animals} />
                <OwnersList owners={this.state.owners} />
                <PetFamilies 
                    petFamilies = {this.state.petFamilies}
                    owners={this.state.owners}
                     animals={this.state.animals}
                />
            </React.Fragment>
        );
    }
}