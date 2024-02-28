import { proxy } from "valtio";

const state = proxy({
  darkTheme: "",
});

export default state;
