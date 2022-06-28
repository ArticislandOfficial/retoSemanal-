const apiprueba = `https://api.waqi.info/feed/here/?token=49e87637ca345fcdb6ecde33c4d95ffdf53a7312/attributions`;

const peticion = fetch(apiprueba)
  .then((result) => result.json())
  .then((dataIaqui) => {
    console.log(dataIaqui);
  });
// console.log(apiprueba.data.iaqi);

// const getData = () => {
//   // padre
//   const books = async () => {
//     const resp = await fetch(APIprueba, {
//       method: "GET", // traer elementlos
//     });
//     const data = await resp.json();
//     showCustomers(data); // function
//     showChart(data); // function
//   };
//   books();
// };

console.log("Graficas");
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
