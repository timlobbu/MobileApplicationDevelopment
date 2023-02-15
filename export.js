// konvert fahrenhit ke celcius
export let convertSuhu = () => {
  let suhu = document.getElementById("suhu").value;
  const hitungSuhu = (suhu - 32) / 1.8;
  return (document.getElementById(
    "hasilSuhu"
  ).innerHTML = `${hitungSuhu.toFixed(2)} Celcius`);
};

//
let hitungBmi = () => {
  let tinggi = document.getElementById("tinggi").value;
  let berat = document.getElementById("berat").value;
  let kategori = document.getElementById("kategori");
  const bmi = berat / (tinggi * tinggi);
  if (bmi >= 18.5 && bmi <= 22.9) {
    kategori.innerHTML = "Normal";
  } else if (bmi >= 23 && bmi <= 24.9) {
    kategori.innerHTML = "Berlebih";
  } else if (bmi >= 25) {
    kategori.innerHTML = "Obesitas";
  }
  document.getElementById("bmi").innerHTML = bmi.toFixed(2);
};

export default hitungBmi;
