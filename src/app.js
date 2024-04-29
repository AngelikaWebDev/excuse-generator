window.onload = function() {
  document
    .getElementById("generateExcuse")
    .addEventListener("click", function() {
      document.getElementById("excuse").innerHTML = generateExcuse();
    });

  const who = ["El hada madrina", "El dragón", "El demogorgon"];
  const action = ["borró", "desintegró", "fulminó"];
  const what = ["mi código", "mi vida", "mi pastel de manzana"];
  const when = ["ayer", "el lunes", "el mes pasado"];
  const whoImage = {
    "El hada madrina":
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS4CdulrMq3iaNREwr_7R8g5TOkOTOCBQIRXS2h7HZzLuvtC1Ib2M5X9h7D3QBtkE4fLJ0va66RuoAJMIcvxfGsc_vtFdeEtWoB8jJBqfSegoddPhhMaaUrcWrnXwOHPbDjjzWU6ww6ZA/s16000/transparent-png-shrek-Hada-Madrina-characters-download+%25281%2529.png",
    "El dragón":
      "https://static.wikia.nocookie.net/heroe/images/2/2c/Spyro_sin_fondo_CTRumble_promo_render.PNG/revision/latest/scale-to-width-down/1000?cb=20240112074335&path-prefix=es",
    "El demogorgon":
      "https://static.wikia.nocookie.net/green-stripes-adventures/images/7/78/Demogorgon_Stranger_Things.png/revision/latest?cb=20201008181108"
  };

  function generateExcuse() {
    const whoRandom = Math.floor(Math.random() * who.length);
    const actionRandom = Math.floor(Math.random() * action.length);
    const whatRandom = Math.floor(Math.random() * what.length);
    const whenRandom = Math.floor(Math.random() * when.length);

    const excuse = [
      who[whoRandom] +
        " " +
        action[actionRandom] +
        " " +
        what[whatRandom] +
        " " +
        when[whenRandom] +
        "."
    ];
    const personaje = whoImage[who[whoRandom]];

    document.getElementById("personaje").src = personaje ? personaje : "";
    return excuse;
  }
};
