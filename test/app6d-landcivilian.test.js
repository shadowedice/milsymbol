import { ms } from "../src/ms";
import { app6d } from "../src/milstd";
import verify from "./app6d";
ms.setStandard("APP6");

import icons from "../src/numbersidc/sidc/landcivilian";
ms.addIcons(icons);

verify(ms, app6d, "APP-6 D Land Civilian Organization", "11");
