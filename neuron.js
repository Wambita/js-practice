//neuron, that enables your AI/bot to learn to mutate data into a more usable shape. You can see how it works from the example.
function neuron(data){
  if  (data.length === 0) return{}

  const  result = {
    questions: {},
    orders: {}
  }

  function formatKey(text){
    return text.toLowerCase().replace(/\s+/g, '_').replace(/\?$/,'')
  }
    data.forEach(entry => {
      const [typePart, responsePart] = entry.split(' - Response: ')
      let [type, query ] = typePart.split(': ')
      query = query.trim()
      const response = responsePart.trim()

      const key = formatKey(query)
      if (type.toLowerCase() === 'questions'){
        if(!result.questions[key]){
          result.questions[key] = {question: query, response: []}
        }
        result.questions[key].response.push(response)
      } else if(type.toLowerCase() ==='orders') {
        const key = formatKey(query)
        if(!result.orders[key]){
          result.orders[key] = {order: query, response: []}
        }
        result.orders[key].response.push(response)
      }
    })
    return result;
  }




// Example test:
// const input = [
//   'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//   'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//   'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//   'Orders: shutdown! - Response: Yes Sr!',
//   'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
// ]


//   console.log(neuron(input));
