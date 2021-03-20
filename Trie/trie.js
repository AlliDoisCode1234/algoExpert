function Node(data) {
    this.data = data;
    this.isEndOfWord = false;
    this.children = {};
}


function Trie() {
    this.root = new Node();
}

// Insert Standard Operation

Trie.prototype.insert = function(word) {
    
    let node = this.root;

    for (char of word) {
        if (node[char] == null) node[char] = {};
        node = node[char];
    }

    node.isEndOfWord = true;
}


// Search Standard Operation

Trie.prototype.search = function(word) {

    let node = this.root;

    for (char of word) {
        node = node[char];
        if (node === null) return null;
    }

    return node !== null && node.isEndOfWord === true;

}

t = new Trie();

console.log(t.insert("test"));
console.log(t.insert("toaster"));
console.log(t.insert("taco"));
console.log(t.search("test"));
console.log(t.search("toast"));
console.log(t.remove("test"));
console.log(t.search("test"));