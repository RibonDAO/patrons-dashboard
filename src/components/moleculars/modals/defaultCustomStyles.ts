import { Styles } from "react-modal";
import { theme } from "@ribon.io/shared/styles";

export const defaultCustomStyles: Styles = {
  overlay: {
    backgroundColor: theme.colors.backgroundOverlay,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    border: "",
    marginTop: 0,
  },
};
