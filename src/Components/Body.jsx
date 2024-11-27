import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "./Cards"

const Body = () => {
    let [foodList, setfoodList] = useState([])

    useEffect(() =>{
        fetchMeals()
    },[])

    let fetchMeals = async () =>{
        let lists = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        setfoodList(lists.data.meals)
    }
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center my-5 gap-5">
        {foodList.map(list =>(
            <Cards key={list.idMeal} {...list}/>
        ))}
    </div>
  )
}

export default Body
