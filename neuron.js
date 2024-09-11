//neuron, that enables your AI/bot to learn to mutate data into a more usable shape. You can see how it works from the example.
function neuron(data){
  if  (data.length === 0) return{}

  const  result = {
    questions: {},
    orders: {}
  }

  function formatKey(text){
    return text.toLowerCase().replace(/\s+/g, '_').replace(/[^\w_]/g,'')
  }
    
  
  data.forEach(entry => {
    // Split the entry on the ' - ' and then check for 'Response:' or 'Responses:'
    const [typePart, responsePart] = entry.split(/ - (Response|Responses): /);
    if (!typePart || !responsePart) return; // Skip if the format is incorrect

    let [type, query] = typePart.split(': ');
    query = query.trim();

    // Determine if the responsePart contains "Response" or "Responses"
    const isMultipleResponses = responsePart.startsWith('Responses:');
    const responses = isMultipleResponses 
      ? responsePart.replace('Responses: ', '').split(',').map(response => response.trim())
      : [responsePart.replace('Response: ', '').trim()];

    const key = formatKey(query); // Normalize the query to create the key

    if (type.toLowerCase() === 'questions') {
      if (!result.questions[key]) {
        result.questions[key] = { question: query, responses: [] };
      }
      result.questions[key].responses.push(...responses);
    } else if (type.toLowerCase() === 'orders') {
      if (!result.orders[key]) {
        result.orders[key] = { order: query, responses: [] };
      }
      result.orders[key].responses.push(...responses);
    }
  });

  return result;
}

//Example test:
// const input = [
//   'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//   'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//   'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//   'Orders: shutdown! - Response: Yes Sr!',
//   'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
// ]


//   console.log(neuron(input));
