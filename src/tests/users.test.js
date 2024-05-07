// You already have the methods imported
const expect = require('expect');
const { getUser, getUsers } = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

// users.js





const { fetchUserData } = require('../users');

test('fetchUserData resolves with correct user data', async () => {
    // Aquí vamos a realizar la prueba para fetchUserData
    
    // Define el id de usuario que quieres obtener
    const userId = 1;
    
    // Llama a la función fetchUserData con el id de usuario
    const userData = await fetchUserData(userId);
    
    // Verifica si los datos del usuario devueltos son correctos
    expect(userData).toEqual({ id: 1, name: 'hpLover4', email: 'sirious90@gmail.com' });
});

