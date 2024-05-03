const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const proceso = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { nombre, apellido } = JSON.parse (event.body);
    const createAt = new Date();
    const id = v4();

    const newProcess = {
        id,
        nombre,
        apellido,
        createAt,
        done: false,
    };
    await dynamodb
    .put({
        TableName: 'usuarios',
        Item: newProcess,
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(newProcess),
    };
};

module.exports = {
    proceso,
};