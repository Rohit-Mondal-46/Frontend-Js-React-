import React, { useContext } from "react";
import { GlobalContext } from "../../context/Index";

function Home() {
  const { query, setQuery, recipe,handleAddFav,fav } = useContext(GlobalContext);
  return (
    <div className="flex flex-wrap">
      {query.length ? (
        recipe.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 w-60 mx-auto mb-3">
            <img className="h-40" src={`${item.image_url}`} alt="img" />
            <h3><b>Name: </b>{item.title}</h3>
            <button className="bg-teal-500" onClick={()=>handleAddFav(item.id)}>{fav.find(favItem => favItem.id === item.id)?'remove':'add to cart'}</button>
          </div>
        ))
      ) : (
        <h3>Please search to get results!!!</h3>
      )}
    </div>
  );
}

export default Home;
