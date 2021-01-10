const flightsOne = [{ origin: 'MEL', destination: 'CAN' }];
const flightsTwo = [{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'PVG' }];
const flightsThree = [{ origin: 'MEL', destination: 'HKG' }, { HKG CAN }, { origin: 'CAN', destination: 'PVG' }];
const flightsFour = [{ origin: 'MEL', destination: 'HKG' }, { HKG CAN }, { CAN  SNG }, { origin: 'CAN', destination: 'PVG' }];


const specialFlightstop = {
    1:'direct',
    2:'1 stop',
    36:'dream line',
};

const normalFlifhtstop = (n) => `${n-1} stops`;

const getStops = (flights) => {
    const { length } = flights;

    const specialFlightstop = specialFlightstop[length];

    if (specialFlightstop) {
        return specialFlightstop;
    }

    return normalFlifhtstop (length);

};

console.log(flightsThree);



//三元表达式
const getStops = (flights) => {
    const { length } = flights;

    const specialFlightstop = specialFlightstop[length];

    return specialFlightstop ? specialFlightstop : normalFlifhtstop(length);
}


//短路计算
const getStops = (flights) => {
    const { length } = flights;

    const specialFlightstop = specialFlightstop[length];

    return specialFlightstop || normalFlifhtstop(length);
}



const getStops = (flights) => {
    const { length } = flights;

    return specialFlightstop[length] || normalFlifhtstop(length);



const getStops = (flights) => {
    const { length } = flights;

    const specialFlightstop = specialFlightstop[length];

    return {
        1:'direct',
        2:'1 stop',
        36:'dream line',
    }[length] || `${n-1} stops`;
} 





//given by an array of flights, returns stops statement to user.

//ex.

//- flights: `[{ origin: 'MEL', destination: 'CAN' }]` -> 'Direct'
//- flights: `[{ origin: 'MEL', destination: 'CAN' }, { origin: 'CAN', destination: 'PVG' }]` -> 
//'1 stop'
//- flights: `[{ origin: 'MEL', destination: 'HKG' }, { HKG - CAN }, {}, { origin: 'CAN', destination: 'PVG' }]` -> '3 stops'
//- flights: `[{ origin: 'MEL', destination: 'HKG' }, { HKG - CAN }, { CAN - SNG }, { origin: 'CAN', destination: 'PVG' }]` -> 'n stops'

//```js
//const flights = [{ origin: 'MEL', destination: 'CAN' }];
//getStops(flights) // 'Direct'
```