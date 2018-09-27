# t9App

Install node modules :
```shell
  yarn install && cd client && yarn install && cd ..
```

dev ( run both server on 5000 && client on 3000 ):
```shell
  yarn dev
```

server:
```shell
  yarn server
```

client:
```shell
  yarn client
```

build client:
```shell
  yarn build
```

# Use:

This App implements T9 Predictive Text Input (node / React).

# Back End:

To solve the problem, I didn't chose to use brute force. I prefered a solution based on a tree of nodes and a dictionary.
We will parse the dictionary and put every word to a specific node in the tree.
To do that, we translate the word into a suite of numbers which will match the user input : 
ex : ABOUT -> 22688
we will create a node for each digit and store the word
RNode -> 2 -> 2 -> 6 -> 8 -> 8 [ABOUT]

Then, when the user enter numbers, we just have to go to the corresponding node and see if there's some words stored in it.
  
Performance : 

I didn't implement sessions to store the current node and navigate easily and more fastly through the tree.
I just created it on every call.
  
# Front End:

I try to design a classic black phone using styled-components package.