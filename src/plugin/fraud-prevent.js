import { uuid } from 'vue-uuid';
import clientIP from 'public-ip';
import parser from 'ua-parser-js';
import { deviceDetect } from "mobile-device-detect";

const clientInfo = new parser().getResult();

console.log(clientInfo, uuid.v4(), deviceDetect());
