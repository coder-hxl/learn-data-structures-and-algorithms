class HashTable<T> {
  // 创建一个数组, 存放链地址法中的链(数组结构)
  storage: [string, T][][] = []
  // 数组最大长度
  private length: number = 7
  // 元素个数
  private count: number = 0

  private hashFunc(key: string, max: number): number {
    // 1.计算 hashCode cats => 60337(27为底的时候)
    let hashCode = 0
    const length = key.length
    for (let i = 0; i < length; i++) {
      // 霍纳算法计算 hashCode 的值
      hashCode = 31 * hashCode + key.charCodeAt(i)
    }

    // 2.求出索引值
    const index = hashCode % max

    return index
  }

  private isPrime(num: number): boolean {
    const sqrt = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return false
    }

    return true
  }

  private getNextPrime(num: number): number {
    let prime = num
    while (!this.isPrime(prime)) {
      prime++
    }

    return prime
  }

  private resize(newLength: number) {
    // 设置新的长度
    let newPrime = this.getNextPrime(newLength)
    if (newPrime < 7) newPrime = 7
    this.length = newPrime

    // 获取原先的数据, 重新放入到新的数组容器中
    // 1.对数据进行初始化
    const oldStorage = this.storage
    this.storage = []
    this.count = 0

    // 2.存储到新容器
    oldStorage.forEach((bucket) => {
      if (!bucket) return

      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
  }

  // 插入/修改
  put(key: string, value: T) {
    // 1.根据 key 获取对应位置的索引
    const index = this.hashFunc(key, this.length)

    // 2.取出索引对应位置的数组(桶)
    let bucket = this.storage[index]

    // 3.判断 bucket 是否有值
    if (!bucket) {
      bucket = this.storage[index] = []
    }

    // 4.更新操作
    let isUpdate = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        tuple[1] = value
        isUpdate = true
      }
    }

    // 5.插入操作
    if (!isUpdate) {
      bucket.push([key, value])
      this.count++

      // 扩容: 装填因子 > 0.85
      const loadFactor = this.count / this.length
      if (loadFactor > 0.85) this.resize(Math.floor(this.length * 2))
    }
  }

  // 获取值
  get(key: string): T | undefined {
    const index = this.hashFunc(key, this.length)

    const bucket = this.storage[index]

    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]

      if (tupleKey === key) return tupleValue
    }
  }

  // 删除操作
  remove(key: string): T | undefined {
    const index = this.hashFunc(key, this.length)

    const bucket = this.storage[index]
    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]
      if (tupleKey === key) {
        bucket.splice(i, 1)
        this.count--

        // 缩容: 装填因子 < 0.25
        const loadFactor = this.count / this.length
        if (loadFactor < 0.25) this.resize(Math.floor(this.length / 2))

        return tupleValue
      }
    }

    return undefined
  }
}

const hashTable = new HashTable()

console.log('------------ 插入/更新 ------------')
hashTable.put('aaa', 100)
hashTable.put('aaa', 123)
hashTable.put('bbb', 200)
hashTable.put('ccc', 300)
hashTable.put('cba', 700)
console.log(hashTable.storage)

console.log('------------ 获取 ------------')
console.log(hashTable.get('aaa'))
console.log(hashTable.get('bbb'))

console.log('------------ 删除 ------------')
console.log(hashTable.remove('ccc'))
console.log(hashTable.storage)

console.log('------------ 扩容 ------------')
hashTable.put('abc', 600)
hashTable.put('nba', 888)
hashTable.put('cbn', 999)
console.log(hashTable.storage)

console.log('------------ 缩容 ------------')
hashTable.remove('abc')
hashTable.remove('nba')
hashTable.remove('cbn')
console.log(hashTable.storage)
