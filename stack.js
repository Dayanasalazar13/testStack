class Stack {
    constructor() {
        this.top = 0;
        this.elements = [1,2,3,4,5];
    }
 
    meter(element) {
      this.elements.push(element);
     return this.elements.pop();
    }

    sacarUltimoElemento() {  
      return this.elements.pop();  
    }

    sacarNultimosElemento(num) {
        const elements = [];
        for (let index = 0; index < num; index++) {
            elements.push(this.elements.pop())    
        }
        return elements;  
      }
}

module.exports = Stack;