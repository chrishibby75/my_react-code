import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import MealItem from "../MealItem/MealItem";
import styles from "./AvailableMeals.module.css";


  const AvailableMeals = () => {
      const [meals, setMeals] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const [httpError, setHttpError] = useState();

    useEffect(() => {

        fetch(`https://reactmealsdb-94567-default-rtdb.firebaseio.com/meals.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong!");
                }
                return response.json();
            })
            .then(data => {
                const loadedMeals = [];
                for (const key in data) {
                    loadedMeals.push({
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price
                    });
                }
                setMeals(loadedMeals);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                setHttpError(error.message);
            });
    }, []);

    if (isLoading) {
        return <section className={styles.mealsLoading}><p>Loading...</p></section>
    }

    if (httpError) {
        return <section className={styles.mealsError}><p>{httpError}</p></section>
    }

      return (
          <section className={styles.meals}>
              <Card>
                  <ul>
                      {meals.map(meal => (
                          <MealItem 
                              key={meal.id}
                              id={meal.id}
                              name={meal.name}
                              description={meal.description}
                              price={meal.price}
                          />
                      ))}
                  </ul>
              </Card>
          </section>
      );
  };

  export default AvailableMeals;
  