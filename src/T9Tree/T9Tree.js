import {T9Node} from './T9Node'
/** T9 Tree */

export class T9Tree {
  
  
  /**
   * Create a t9Tree.
   * @param {array} dictionary : an array of words 
   */
	
  constructor(dictionary) {
    
    // map of alphabet and phone key numbers
    
    this.keys = {
      'a': 2, 'b': 2, 'c': 2, 'd': 3, 'e': 3, 'f': 3,
      'g': 4, 'h': 4, 'i': 4, 'j': 5, 'k': 5, 'l': 5,
      'm': 6, 'n': 6, 'o': 6, 'p': 7, 'q': 7, 'r': 7, 's': 7,
      't': 8, 'u': 8, 'v': 8, 'w': 9, 'x': 9, 'y': 9, 'z': 9
    };
    
    this.tree = this.buildTree(dictionary)
  
  }
  
  /**
   * build the tree.
   * @param {array} dictionary : an array of words 
   */
  buildTree(dictionary) {
   
    // We instantiate the T9 Root node
    
    let rootNode = new T9Node()
    
    // we parse the dictionary & for each word we get his corresponding sentence in numbers 
    // "ABE" => 223
    // and then we attach this word to a node in the tree
   
    dictionary.forEach(word => {
      let nodeKeys = Array.from(word).map(letter => this.keys[letter])
      return rootNode.attachWordToNode(word,nodeKeys)
    })
    
    return rootNode 
  }
  
  query(search) {
    const node = this.tree.findNode(Array.from(search))
    if (node)    
      return node.findAllWords()
    else return ["no results"]
  }
   
}