function validate(expr) {
  // Trabalhando com uma pilha, para facilitar a função;
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];
    if (x == '(' || x == '[' || x == '{') {
      // Adicionamos o elemento na pilha
      stack.push(x);
    }

    // Se o caractere atual não estiver abrindo o colchete, ele deve estar fechando. Portanto, a pilha não pode estar vazia neste momento.
    if (stack.length == 0)
      return false;

    let check;
    switch (x) {
      case ')':
        check = stack.pop();
        if (check == '{' || check == '[')
          return false;
        break;

      case '}':
        check = stack.pop();
        if (check == '(' || check == '[')
          return false;
        break;

      case ']':
        check = stack.pop();
        if (check == '(' || check == '{')
          return false;
        break;
    }
  }

  // Check Empty Stack
  return (stack.length == 0);
}

// Driver code
let expr = "({[()]})";

// Function call
if (validate(expr)) {
  console.log("Expressão válida");
} else {
  console.log("Expressão não válida");
}