class Node {

	constructor(data){

		this.data = data;
		this.left = null;
		this.right = null;

	}
}

let root;

function getTotalNodes()
{
	let nodesCounter = 0;

	if (root == null){
		return 0;
	}else{
		nodesCounter++;
	}
	
	let arrayOfNodes = [];
	
	arrayOfNodes.push(root);
	
	while (arrayOfNodes.length != 0)
	{
		let temporal = arrayOfNodes.shift();

	 	if (temporal.left != null)
	 	{
	 		arrayOfNodes.push(temporal.left);
	 		nodesCounter++;
	 	}

	 	if (temporal.right != null)
	 	{
	 		arrayOfNodes.push(temporal.right);
	 		nodesCounter++;
	 	}
	 }
	 return nodesCounter;
}

// Se crea el siguiente arbol binario

/*  1
  /  \
  2	  3
 / \ / \
 4 5 6  7
/      /
8     9
*/

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.left.left = new Node(8);
root.right.left = new Node(6);
root.right.right = new Node(7)
root.right.right.left = new Node(9);

document.getElementById("solucion").innerHTML = "El número total de nodos es "+getTotalNodes();


