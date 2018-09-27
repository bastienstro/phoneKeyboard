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
	
	findNode(string) {
  	
  	if (!string.length) return this
  	const key = string[0]
  	return this.children[key].findNode(string.substr(1))
	}
	
	hasChildNode(key) {
  	return !!this.children[key]
	}
	
	findAllWords() {
  	const childrenNodes = Object.values(this.children);
  	const childrenWords = childrenNodes.reduce((words,node) => [...words, ...node.findAllWords()],[])
		return [...this.words, ...childrenWords]
	}
	
}
