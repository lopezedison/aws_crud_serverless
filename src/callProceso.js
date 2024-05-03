const aws = require('aws-sdk');

const callProceso = async (event) => {
    const dynamodb = new aws.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    console.log("ID recibido:", id);

    const result = await dynamodb.get({
        TableName: 'usuarios',
        Key: { id },
    }).promise();

    console.log("Resultado de la consulta:", result);

    if (!result.Item) {
        return {
            statusCode: 404,
            body: "Usuario no encontrado",
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result.Item),
    };
};

module.exports = { callProceso };
