import { T9Tree } from './T9Tree';
   
it('should create a valid tree', () => {
  
  const dictionary = ["aa","ab","ac","ba","bb","bc","ca","cb","cc","ad","dc"]
  const t = new T9Tree(dictionary)
  
  expect(t.tree.hasChildNode(0)).toBeFalsy()
  expect(t.tree.hasChildNode(1)).toBeFalsy()
  expect(t.tree.hasChildNode(2)).toBeTruthy()
  expect(t.tree.hasChildNode(3)).toBeTruthy()
  expect(t.tree.hasChildNode(4)).toBeFalsy()
  expect(t.tree.hasChildNode(5)).toBeFalsy()
  expect(t.tree.hasChildNode(6)).toBeFalsy()
  expect(t.tree.hasChildNode(7)).toBeFalsy()
  expect(t.tree.hasChildNode(8)).toBeFalsy()
  expect(t.tree.hasChildNode(9)).toBeFalsy()
  
  expect(t.tree.getChildNode(2).hasChildNode(2)).toBeTruthy()
  expect(t.tree.getChildNode(2).hasChildNode(3)).toBeTruthy()
  expect(t.tree.getChildNode(2).hasChildNode(4)).toBeFalsy()
  expect(t.tree.getChildNode(2).hasChildNode(5)).toBeFalsy()
  expect(t.tree.getChildNode(2).hasChildNode(6)).toBeFalsy()
  expect(t.tree.getChildNode(2).hasChildNode(7)).toBeFalsy()
  expect(t.tree.getChildNode(2).hasChildNode(8)).toBeFalsy()
  expect(t.tree.getChildNode(2).hasChildNode(9)).toBeFalsy()
  
  expect(t.tree.getChildNode(3).hasChildNode(2)).toBeTruthy()
  expect(t.tree.getChildNode(3).hasChildNode(3)).toBeFalsy()
  expect(t.tree.getChildNode(3).hasChildNode(4)).toBeFalsy()
  expect(t.tree.getChildNode(3).hasChildNode(5)).toBeFalsy()
  expect(t.tree.getChildNode(3).hasChildNode(6)).toBeFalsy()
  expect(t.tree.getChildNode(3).hasChildNode(7)).toBeFalsy()
  expect(t.tree.getChildNode(3).hasChildNode(8)).toBeFalsy()
  expect(t.tree.getChildNode(3).hasChildNode(9)).toBeFalsy()
  
  expect(t.tree.getChildNode(2).getChildNode(2).words).toEqual(["aa","ab","ac","ba","bb","bc","ca","cb","cc"])
  expect(t.tree.getChildNode(2).getChildNode(3).words).toEqual(["ad"])
  expect(t.tree.getChildNode(3).getChildNode(2).words).toEqual(["dc"])
    
});

it('should test query results', () => {
 
  const dictionary = ["aa","ab","ac","ba","bb","bc","ca","cb","cc","ad","dc"]
  const t = new T9Tree(dictionary) 
     
  expect(t.query("23")).toEqual(["ad"])
  expect(t.query("32")).toEqual(["dc"])
  expect(t.query("22")).toEqual(["aa","ab","ac","ba","bb","bc","ca","cb","cc"]);
  expect(t.query("54")).toEqual(["no results"]);
    
    
});
