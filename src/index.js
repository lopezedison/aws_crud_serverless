module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message : 'Este es mi proyecto de Arquitectura',
        input: event,
      },
      null,
      2
    ),
  };
};
