const cities = ['Ciudad de México', 'Bogotá', 'Lima', 'Buenos Aires'];

module.exports =  randomString = () => {
    return cities[Math.floor(Math.random() * cities.length)];
};