import { Platform } from "react-native";

export const IMAGES = {
  loading: { uri: Platform.OS === "ios" ? "loading.gif" : "loading" },
  backArrow: { uri: "backarrow" },
  backgroundImage: require("../assets/images/background.png"),
  filterIcon: require("../assets/images/filter.png"),
  infoIcon: require("../assets/images/Info.png"),
  headerShape: require("../assets/images/header-shape.png"),
  listShape: require("../assets/images/list-shape.png"),
  contentShape: require("../assets/images/content-shape.png"),
  close: require("../assets/images/close.png"),
  dpImage: require("../assets/images/dp-image.png"),
  nameShape: require("../assets/images/name-shape.png"),
  chatIcon: require("../assets/images/chat-icon.png"),
  reload: require("../assets/images/reload.png"),
  addButton: require("../assets/images/add-button.png"),
  progressBar: require("../assets/images/progress-bar.png"),
  topArrow: require("../assets/images/top-arrow.png"),
};
