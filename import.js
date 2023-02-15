import { convertSuhu } from "./export.js";
import hitungBmi from "./export.js";

const cekSuhu = document.getElementById("cekSuhu");
cekSuhu.addEventListener("click", convertSuhu);

const cekbmi = document.getElementById("cekBmi");
cekbmi.addEventListener("click", hitungBmi);
