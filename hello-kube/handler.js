'use strict'

module.exports = async (event, context) => {
  const result = {
    'status': 'Received test input: ' + JSON.stringify(event.body)
  }

  return context
    .status(200)
    .succeed(result)
}

