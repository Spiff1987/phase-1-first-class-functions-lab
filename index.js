// Code your solution in this file!


const returnFirstTwoDrivers = (scubersDrivers) => {
    return scubersDrivers.slice(0, 2);
};

const returnLastTwoDrivers = (scubersDrivers) => {
  return scubersDrivers.slice(scubersDrivers.length - 2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function (someFare) {
      return num * someFare;
};
}

const fareDoubler = (num) => createFareMultiplier(2)(num);

const fareTripler = (num) => createFareMultiplier(3)(num);

function selectDifferentDrivers(scubersDrivers, aFunction) {
    return aFunction(scubersDrivers);
}
