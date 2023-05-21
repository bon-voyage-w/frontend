import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// add
// import { faMagnifyingGlass } from "@fortawesome/free-regular-svg-icons";
// library.add(faMagnifyingGlass);
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
