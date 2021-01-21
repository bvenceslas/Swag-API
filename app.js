const express = require('express');
// swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 4000;

// using swagger
const swaggerOptions = {
    swaggerDefinition: {
        info:{
            title:'Swag Library API',
            version:'1.0.0',
            description: 'Autamated Swagger Library API'
        }
    },
    apis: ['app.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// routes

// annotations
/**
 * @swagger
 * /books:
 *  get:
 *      description: Get all the books
 *      responses:
 *          200:
 *              description: Success
 * 
*/

app.get('/books', async (req, res) => {
    await res.json([{
        id:1,
        title: 'Swagger documentation'
    },{
        id:2,
        title: 'Swagger implement'
    }]);
});

// annotations
/**
 * @swagger
 * /books:
 *  post:
 *      description: Create a new book
 *      parameters:
 *        -name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string *      
 *      responses:
 *          201:
 *              description: Created
*/

app.post('/books', async (req, res) => {
    await res.status(201).send();
});

app.get('/', async (req, res) => {
    await res.json('Swag API works fine !!!');
});

app.listen(port, () => console.log(`Server listening on port: ${port} ...`));