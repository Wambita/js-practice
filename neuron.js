//neuron, that enables your AI/bot to learn to mutate data into a more usable shape. You can see how it works from the example.

function neuron(data){
    const result = {
        questions: {},
        answers: {}
    }

function formatKey(text){
    return text.toLowerCase().replace(/\s+/g, '_').replace(/\?$/, '')
}

data.forEach(entry => {
    const [typePart, responsePart] = entry.split(' - Response: ');
    let [type, query] = typePart.split(': ');
    query = query.trim();
    const response = responsePart.trim();

    if (type.toLowerCase() === 'questions') {
      const key = formatKey(query);
      if (!result.questions[key]) {
        result.questions[key] = { question: query, responses: [] };
      }
      result.questions[key].responses.push(response);
    } else if (type.toLowerCase() === 'orders') {
      const key = formatKey(query);
      if (!result.orders[key]) {
        result.orders[key] = { order: query, responses: [] };
      }
      result.orders[key].responses.push(response);
    }
  });

  return result;
}

// Example test:
const input = [
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
  ];
  
  console.log(neuron(input));
