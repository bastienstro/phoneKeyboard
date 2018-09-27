export class T9Node {
	
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
	
	attachWordToNode(word,nodeKeys) {
  
    /* we add here the word */
    if (!nodeKeys.length) {
         this.addWord(word)
      return
    }
    
    let key = nodeKeys[0]
    
    if (!this.hasChildNode(key)) {
      let childNode = new T9Node()
      this.addChildNode(childNode,key)
    }
    
    nodeKeys.shift()
    
    return this.children[key].attachWordToNode(word,nodeKeys)
  	
	}
	
	findNode(nodeKeys) {
  	
  	if (!nodeKeys.length) return this
  	const key = nodeKeys[0]
  	nodeKeys.shift()
  	return this.children[key].findNode(nodeKeys)
	}
	
	findAllWords() {
  	const childrenNodes = Object.values(this.children);
  	const childrenWords = childrenNodes.reduce((words,node) => [...words, ...node.findAllWords()],[])
		return [...this.words, ...childrenWords]
	}
	
}

