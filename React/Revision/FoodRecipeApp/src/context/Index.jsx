import React, { createContext, useState } from "react";
export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [fav, setFav] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=a2b14813-ebc4-48b9-acbd-7961bbb7a11d`
      );
      const data = await response.json();
      const filteredData = data.data.recipes;
      setRecipe(filteredData);
      console.log(filteredData);
    } catch (err) {
      console.log("Hi");
      setRecipe([]);
    }
  }

  function handleAddFav(id) {
    setFav((preFav)=>{
      const isFav = preFav.some((item) => item.id===id)
      if(isFav){
        return preFav.filter((item) => item.id!==id)
      }
      else{
        const temp = recipe.filter((item) => item.id == id);
        return [...fav, ...temp]
      }
    })
  }
  return (
    <GlobalContext.Provider
      value={{ query, setQuery, handleSubmit, recipe, handleAddFav,fav }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
