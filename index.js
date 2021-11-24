const returnFirstTwoDrivers = function (drivers) {

    let firstDrivers = drivers.slice(0,2);

    return firstDrivers;
}

const returnLastTwoDrivers = function (drivers) {

    let lastDrivers = drivers.slice(-2);

    return lastDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {

    return function (fare) {

        const finalFare = (fare * integer)

        return finalFare
    }
}

function fareDoubler (fare) {
    const Doubler = createFareMultiplier(2);
    return Doubler(fare);
}

function fareTripler (fare) {
    const Tripler = createFareMultiplier(3);
    return Tripler(fare);
}

function selectDifferentDrivers (drivers, tossup) {
    return tossup(drivers);
}