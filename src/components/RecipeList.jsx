import React from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

// import { useGlobalContext } from "../context";
import Recipe from "./Recipe";

const RecipeList = ({ data }) => {
  const navigate = useNavigate();

  console.log(data);

  return (
    <section>
      {data.map((item, index) => {
        const card = item.recipe;
        const id = new Date().getTime();
        const cards = { ...card, id: id };
        console.log(cards.id);
        return (
          <div key={index}>
            <h2>{cards.label}</h2>
            <img src={cards.image} alt={cards.cautions} />
            <button
              className="btn"
              onClick={() => navigate(`/recipe/${id}`, { state: cards })}
            >
              Detail
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default RecipeList;
