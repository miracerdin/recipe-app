import React, { useState, useEffect } from "react";
import RecipeList from "../RecipeList";
import Form1, { Input, Select, Button, Section1 } from "./Form.styled.jsx";
// import { useGlobalContext } from "../../context";

// `https://api.edamam.com/search?q=${meal}&app_id=9238c056&app_key=37ab4e858b8653f8de1c56808a7e51c8&mealType=${mealtype}`;
const Form = () => {
  //   const { setSearchTerm } = useGlobalContext();
  const [meal, setMeal] = useState("chicken");
  const [mealtype, setMealType] = useState("dinner");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${meal}&app_id=9238c056&app_key=37ab4e858b8653f8de1c56808a7e51c8&mealType=${mealtype}
`;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(`${url}`);
    const data = await response.json();
    console.log(data.hits);
    setData(data.hits);
    setIsLoading(true);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (!isLoading) {
    return <h2 className="text-center ">Loading..</h2>;
  }
  return (
    <Section1 className="section section-form">
      <Form1 onSubmit={handleSubmit} className="form">
        <Input
          type="text"
          onChange={(e) => setMeal(e.target.value)}
          value={meal}
        />
        <Select
          name="mealtype"
          id="mealtype"
          onChange={(e) => setMealType(e.target.value)}
          value={mealtype}
        >
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </Select>
        <Button type="submit" onSubmit={handleSubmit}>
          Submit
        </Button>
      </Form1>
      <RecipeList data={data} />
    </Section1>
  );
};

export default Form;
