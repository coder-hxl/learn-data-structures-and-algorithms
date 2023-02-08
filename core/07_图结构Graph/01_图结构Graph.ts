class Graph<T> {
  // 顶点
  private vertexes: T[] = []
  // 边: 邻接表
  private adjList: Map<T, T[]> = new Map()

  addVertex(vertex: T) {
    // 添加顶点
    this.vertexes.push(vertex)
    // 创建存放相邻顶点的数组(邻接表)
    this.adjList.set(vertex, [])
  }

  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  traverse() {
    console.log('Graph: ')
    this.vertexes.forEach((v) => {
      const edges = this.adjList.get(v)
      console.log(`${v} -> ${edges?.join(' ')}`)
    })
  }

  // 广度优先
  bfs() {
    // 1.没有顶点直接退出
    if (!this.vertexes.length) return

    // 2.选择根顶点
    const root = this.vertexes[0]

    // 3.队列结构
    const queue: T[] = [root]

    // 4.记录出现在队列的顶点
    const visited = new Set<T>()
    visited.add(root)

    // 5.依次出队, 并将无记录的相邻顶点入队
    while (queue.length) {
      const v = queue.shift()!
      console.log(v)

      this.adjList.get(v)?.forEach((v2) => {
        if (!visited.has(v2)) {
          visited.add(v2)
          queue.push(v2)
        }
      })
    }
  }

  // 深度优先
  dfs() {
    // 1.没有顶点直接退出
    if (!this.vertexes.length) return

    // 2.选择根顶点
    const root = this.vertexes[0]

    // 3.栈结构
    const stack: T[] = [root]

    // 4.记录出现在栈的顶点
    const visited = new Set<T>()
    visited.add(root)

    // 5.依次出栈, 并将无记录的相邻顶点入栈
    while (stack.length) {
      const vertex = stack.pop()!
      console.log(vertex)

      const neighbors = this.adjList.get(vertex)
      if (!neighbors) continue
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const nei = neighbors[i]
        if (!visited.has(nei)) {
          visited.add(nei)
          stack.push(nei)
        }
      }
    }
  }
}

const graph = new Graph<string>()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

graph.traverse()

console.log('------------ 广度优先 ------------')
graph.bfs()

console.log('------------ 深度优先 ------------')
graph.dfs()
