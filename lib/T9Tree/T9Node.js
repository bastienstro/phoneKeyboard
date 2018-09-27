/** T9 Node */

export class T9Node {
	
	/**
   * Create a node composed of an array of words and an associative array of nodes.
   */
	constructor() {
		
		this.words = []
		this.children = {}
	}
	
	addWord(word) {
		this.words = [...this.words, word ]
	}
	
	addChildNode(node,key) {
		this.children = {
  		 ...this.children,
		  [key] : node
		}	
	}
	
	getChildNode(key) {
  	return this.children[key]
	}
		
	hasChildNode(key) {
  	return !!this.children[key]
	}
	
	/**
   * recursive function to add a word to a node in the tree 
   * @param {string} word - the word to store in the tree.
   * @param {array} nodeKeys - an array of keys : the way to get to the specific node
   */
  attachWordToNode(word,nodeKeys) {
  
    // when there is no more keys means we find the good node to store the word 
   
    if (!nodeKeys.length) {
         this.addWord(word)
      return
    }
    
    let key = nodeKeys.shift()
    
    // if a specific node does not exist we create it 
    
    if (!this.hasChildNode(key)) {
      let childNode = new T9Node()
      this.addChildNode(childNode,key)
    }
    
    // we can go now to the children node with our keys left 
    
    return this.children[key].attachWordToNode(word,nodeKeys)
  	
	}
	
	/**
   * recursive function to find a node by a a set of keys 
   * @param {array} nodeKeys - an array of keys : the way to get to the specific node
   * @returns {node} return the findednode or false if not matched
   */
	findNode(nodeKeys) {
  	
  	if (!nodeKeys.length) return this
  	const key = nodeKeys.shift()
  	
  	if (this.hasChildNode(key)) {
  	  return this.children[key].findNode(nodeKeys)
  	}
  	else 
  	  return false
	}
	
	/**
   * parse the tree from a specific node and get all the words deeper in the tree  
   * @returns {array} an array of words 
   */
	findAllWords() {
  	const childrenNodes = Object.values(this.children);
  	const childrenWords = childrenNodes.reduce((words,node) => [...words, ...node.findAllWords()],[])
		return [...this.words, ...childrenWords]
	}
	
}

