import {T9Node} from './T9Node'

export class T9Tree {
  
  
  /* dictionnary json object */
  constructor(dictionnary) {
    
    this.keys = {
      'a': 2, 'b': 2, 'c': 2, 'd': 3, 'e': 3, 'f': 3,
      'g': 4, 'h': 4, 'i': 4, 'j': 5, 'k': 5, 'l': 5,
      'm': 6, 'n': 6, 'o': 6, 'p': 7, 'q': 7, 'r': 7, 's': 7,
      't': 8, 'u': 8, 'v': 8, 'w': 9, 'x': 9, 'y': 9, 'z': 9
    };
    this.tree = this.buildTree(dictionnary)
    
  }
  
  buildTree(dictionnary) {
    
    let rootNode = new T9Node()
   
    dictionnary.forEach(word => this.attachWordToNode(word,rootNode))
    
    return rootNode 
    
  }
  
  attachWordToNode(word,node,index = 0) {
    /* we add here the word */
    
    if (index === word.length) {
      node.addWord(word)
      return
    }
    const letter = word[index]
    const key = this.keys[letter]
   
    if (!node.hasChildNode(key)) {
      let childNode = new T9Node()
      node.addChildNode(childNode,key)
    } 
    
    return this.attachWordToNode(word,node.getChildNode(key),index+1)
    
  }
  
  query(search) {
    const node = this.tree.findNode(search)    
    return node.findAllWords()
  }
   
}