
export const getData = async () => {
  const myData: any[] = [];
  try {
    for (let i = 1; i < 6; i++) {
      const response = await fetch('https://rickandmortyapi.com/api/character/'+i);
      const data = await response.json();
      myData.push(data);
    }
    return myData;
  } catch (error) {
    console.log(error);
  }
};

getData();

