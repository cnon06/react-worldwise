import lib from "react-axios";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList({ cities, loading }) {
  if (loading) return <Spinner />;
  if (!cities.length)
    return <Message message="There is no any city in the list." />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city, index) => (
        <CityItem city={city} key={index} />
      ))}
    </ul>
  );
}

export default CityList;
