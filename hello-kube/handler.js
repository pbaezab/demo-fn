'use strict'

module.exports = async (event, context) => {
  const result = {
    'status': 'Received test input thanks byron: ' + JSON.stringify(event.body)
  }

  return context
    .status(200)
    .succeed(result)
}

