// hash function

const hash = (key, size) => {
    let hashedKey = 0;
    for (let i =0; i < key.length; i++){
        hashedKey += key.charCodeAt(i)
    }
    return hashedKey % size
}


// hash table

class HashTable {
    constructor() {
        this.size = 10
        this.buckets = Array(this.size)

    // populate each bucket with a Map()
        for (let i = 0; this.buckets.length; i++) {
            this.buckets[i] = new Map()
        }
    }


    // Insert Standard Operation
    insert(key,value) {
        let idx = hash(key, this.size)
        this.buckets[idx].set(key, value)
    }

    // Remove Standard Operation
    remove(key) {
        let idx = hash(key, this.size)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)
        return deleted
    }

    // Search Standard Operation
    search(key) {
        let idx = hash(key, this.size)
        return this.buckets[idx].get(key)
    }
}