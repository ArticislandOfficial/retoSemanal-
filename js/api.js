const tokenApi = "49e87637ca345fcdb6ecde33c4d95ffdf53a7312";
const API =
  `https://api.waqi.info/feed/here/?token=${tokenApi}`;

export const getApi = async () => {
  try {
    const getApiClima = await fetch(API);
    const data = await getApiClima;
    return console.log(data);
  } catch (error) {
    console.log("hay un error");
  }
};
