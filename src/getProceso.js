const AWS = require("aws-sdk");

const getProceso = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const result = await dynamodb.scan({
            TableName: 'usuarios',
        }).promise();
    
        const tarea = result.Items
    
        return {
            statusCode: 200,
            body: JSON.stringify({ tarea })
        };
        
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' })
        };
    }
};

module.exports = { getProceso };
