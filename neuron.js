function neuron(data) {
if (data.length === 0) return{}

  const result = {
    questions : {},
    orders: {}
  }

  //helper function to clean and format keys
  function formatKeys(text){
    return text.toLowerCase().replace(/\s+/g, '_').replace(/\?$/, '')
  }
    //process each entry 
    data.forEach(entry => {
      //spli using - 
      const[queryPart, responsePart] = entry.split(' - ').map(s => s.trim())

      if (!queryPart || !responsePart) return; // Skip invalid entries

      //split first part by : to separate type and actual query
      const[type, query] = queryPart.split(':').map(s => s.trim())

      if (!type || !query) return; // Skip invalid entries

      const  response = responsePart.replace(/^Response: /i, '').trim()

      //Handle questions
      if(type.toLowerCase() === 'questions'){
        const key = formatKeys(query)
        if(!result.questions[key]){
          result.questions[key] = {question: query, responses: []}
        }
        //add responses if not already present in responses array
        if(!result.questions[key].responses.includes(response)){
          result.questions[key].responses.push(response)
        }
      }
      //handle orders
      else if(type.toLowerCase() === 'orders'){
        const key = formatKeys(query)
        if(!result.orders[key]){
          result.orders[key] = {order: query, responses: []}
        }
        //add items if not already present in items array
        if(!result.orders[key].responses.includes(response)){
          result.orders[key].responses.push(response)
        }
      }
    })

     // Create the final result based on whether questions or orders have data
  const finalResult = {};
  if (Object.keys(result.questions).length > 0) {
    finalResult.questions = result.questions;
  }
  if (Object.keys(result.orders).length > 0) {
    finalResult.orders = result.orders;
  }

    return JSON.stringify(finalResult, null, 2);
  }

// const input = [
//     'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//     'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//     'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//     'Orders: shutdown! - Response: Yes Sr!',
//     'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
//   ]
//   console.log(neuron(input));
// console.log( neuron(['Orders: shutdown please! - Response: no!'])
// )