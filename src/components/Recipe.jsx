import { useParams, useNavigate, useLocation } from "react-router-dom";
import Div from "./Recipe.styled";
const Recipe = () => {
  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();

  const navigate = useNavigate();
  //! navigate ile gonderilen state(veriyi) yakalamak icin ise
  //! useLocation Hook'u kullanilabilir.
  const location = useLocation();
  const cards = location.state;
  console.log(cards);
  // const [cards, setCards] = useState(null);
  // const [error, setError] = useState(false);
  // useEffect(() => {
  //   fetch();
  // });
  const { label: name, image, ingredientLines, totalNutrients } = cards;
  const {
    CA: calcium,
    CHOCDF: Carbs,
    CHOLE: Cholesterol,
    FAT,
    ENERC_KCAL: Energy,
    PROCNT: Protein,
  } = totalNutrients;
  return (
    <Div className="cards">
      <ul>
        <h4>Nutrients</h4>
        <li>
          {calcium.label}:{Math.trunc(calcium.quantity)}
        </li>
        <li>
          {Carbs.label}:{Math.trunc(Carbs.quantity)}
        </li>
        <li>
          {Cholesterol.label}:{Math.trunc(Cholesterol.quantity)}
        </li>
        <li>
          {FAT.label}:{Math.trunc(FAT.quantity)}
        </li>
        <li>
          {Energy.label}:{Math.trunc(Energy.quantity)}
        </li>
        <li>
          {Protein.label}:{Math.trunc(Protein.quantity)}
        </li>
      </ul>
      <img src={image} alt={cards.name} className="rounded" width="250px" />

      <ol>
        {ingredientLines.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </Div>
  );
};

export default Recipe;
