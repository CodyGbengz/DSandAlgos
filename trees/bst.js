class Node {
	constructor(value) {
		this.val = value;
		this.leftChild = null;
		this.rightChild = null;
        this.queue = [];
        this.output = [];
	}
}
class BinarySearchTree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	insert(currentNode, newValue) {
		if (currentNode === null) {
			currentNode = new Node(newValue);
		} else if (newValue < currentNode.val) {
			currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
		} else {
			currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
		}
		return currentNode;
	}

	insertBST(newValue) {
		if (this.root == null) {
			this.root = new Node(newValue);
			return;
		}
		this.insert(this.root, newValue);
	}

	// Pre-order transversal
	preOrderPrint(currentNode) {
		if (currentNode !== null) {
			console.log(currentNode.val);
			this.preOrderPrint(currentNode.leftChild);
			this.preOrderPrint(currentNode.rightChild);
		}
	}

	// In-order transversal
	inOrderPrint(currentNode) {
		if (currentNode !== null) {
			this.inOrderPrint(currentNode.leftChild);
			console.log(currentNode.val);
			this.inOrderPrint(currentNode.rightChild);
		}
	}

	// Post-order transversal
	postOrderPrint(currentNode) {
		if (currentNode !== null) {
			this.postOrderPrint(currentNode.leftChild);
			this.postOrderPrint(currentNode.rightChild);
			console.log(currentNode.val);
		}
	}

	// Breadth first transversal
	traverseBFS() {
		if (!this.root) return;
		this.queue = [];
		this.queue.push(this.root);
		this.output = [];
		while (this.queue.length) {
			const node = this.queue.shift();
			if (node.left) {
				this.queue.push(node.left);
			}
			if (node.right) {
				this.queue.push(node.right);
			}
			this.output.push(node.data);
		}
		return this.output;
	}
}

var BST = new BinarySearchTree(6);
console.log('The root val for BST : ', BST.root.val);
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.inOrderPrint(BST.root);
