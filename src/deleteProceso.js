const aws = require('aws-sdk');

const deleteProceso = async (event) => {

    const dynamodb = new aws.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb.delete({
        TableName: 'usuarios',
        Key: {
            id,
        }
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Proceso eliminado' })
    };
};

module.exports = {
    deleteProceso,
};