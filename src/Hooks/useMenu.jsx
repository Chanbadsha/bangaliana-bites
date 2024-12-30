import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("../menu.json");

      setMenu(data);
      // console.log(menu);
    };
    fetchData();
  }, []);
  // console.log(menu);
  return menu;
};

export default useMenu;
