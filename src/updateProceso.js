const uuid = require("uuid");
const AWS = require("aws-sdk");

const updateProceso = async (evento) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = evento.pathParameters;

    const { done, nombre, apellido } = JSON.parse(evento.body);

    await dynamodb.update({
        TableName: "usuarios",
        Key: {
            id
        },
        UpdateExpression: "set done = :done, nombre = :nombre, apellido = :apellido",
        ExpressionAttributeValues: {
            ":done": done,
            ":nombre": nombre,
            ":apellido": apellido
        },
        ReturnValues: "UPDATED_NEW"
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Proceso actualizado" })
    };

};

module.exports = {
    updateProceso
};