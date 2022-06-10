import { waterData } from './data.js';

const data = [...waterData.portal_qry_wq];

const tableWater = dataWater => {
  const array = [];

  const dd = dataWater.forEach(obj => {
    if (!array.includes(obj.collectiondate)) {
      return array.push(obj.collectiondate);
    }
  });

  const newArray = array.map(el => dataWater.filter(obj => el === obj.collectiondate));

  const newData = newArray.map(el => {
    const arr = el.map(obj => {
      const object = {
        date: obj.collectiondate,
        [obj.parameter_smarts]: obj.result_display,
      };
      return object;
    });
    return arr;
  });

  console.log(newArray);
  console.log(newData);
};

tableWater(data);
