// import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Product from "./pages/Product";
import Homapage from "./pages/Homapage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import axios from "axios";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [count, setCount] = useState(0);

  async function fetchCities() {
    try {
      setLoading(true);
      const getData = await axios.get("http://localhost:9000/cities");
      console.log(getData.data);
      setCities(getData.data);
    } catch {
      alert("there was an error loading data...");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homapage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              replace
              // element={<CityList cities={cities} loading={loading} />}
              element={<Navigate to="cities" />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} loading={loading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} loading={loading} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
