import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {

    //This method is made to transform and object with his key into an array with the number of elements of each type  
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [] );

    if(transformedIngredients.length===0) {
        transformedIngredients = <p> Please start adding ingredient </p>
    }

    console.log("Los props ingredients son: ",props.ingredients)
    console.log("El Object.keys(props.ingredients es: ",Object.keys(props.ingredients));
    console.log("[...Array(props.ingredients[igKey])] es: ",[...Array(props.ingredients[7])]);
    console.log(transformedIngredients);

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;