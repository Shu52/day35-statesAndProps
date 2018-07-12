import React, { Component } from 'react'
import LocationList from "./LocationList"



export default class PetFamiliesList extends Component {

    render() {
        
        const mapForFamilies =this.props.petFamilies.map((petFamily)=>{
            console.log("petFamily",petFamily)
            let petFamId=petFamily.ownersId
            let petId =petFamily.animalsId
            console.log(petFamId)
            const petOwners=this.props.owners.filter(function(owner){
                if( petFamId === owner.id){
                
                    return true;
                }
            const ownerPets = this.props.animals.filter(function(animal){
                if(petId === animal.id){
                    return true;
                }

            })
                
            })

            //loop through petowners array and make the first key of that object be value of petowners
            console.log("petOwners",petOwners)

            // this.props.owners.filter(function owner(element.id){
            //         console.log("owner name",owner.name)
            //     }
            
            
        })
            return (
                <React.Fragment>
            {<h1>Pet Families</h1>}
            {
            }
            </React.Fragment>
        )
    }
}