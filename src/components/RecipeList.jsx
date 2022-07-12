import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeList = ({ data }) => {
  const navigate = useNavigate();

  console.log(data);

  return (
    <section className="recipe-list">
      {data.map((item, index) => {
        const card = item.recipe;
        const id = new Date().getTime();
        const cards = { ...card, id: id };
        console.log(cards.id);
        return (
          <div key={index} className="recipe-div">
            <h3>{cards.label}</h3>
            <div className="image-div">
              <img src={cards.image} alt={cards.cautions} />
            </div>
            <button
              className="btn btn-primary "
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
