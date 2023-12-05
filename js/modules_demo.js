"use strict";

import * as utils from "./keys";
import {GH_KEY} from "./keys";

utils.geocodeNoToken("Waxahachie, TX").then(data => console.log(data));
utils.reverseGeocodeNoToken({lng: -122.3328, lat: 47.6061}).then(data => console.log(data));
console.log(GH_KEY);

"use strict";

