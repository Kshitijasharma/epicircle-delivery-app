import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function useLoadFonts() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        CopperplateGothic: require("../assets/fonts/CopperplateGothic.ttf"),
      });
      setLoaded(true);
    })();
  }, []);

  return loaded;
}
