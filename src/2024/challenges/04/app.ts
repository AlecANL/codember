export function findSavedNodes(input: string) {
  const connections: Array<Array<number>> = JSON.parse(input);

  const graph = new Map();

  // build the graph
  connections.forEach(([a, b]) => {
    graph.set(a, (graph.get(a) || []).concat(b));
    graph.set(b, (graph.get(b) || []).concat(a));
  });

  const visited = new Set();
  const components: Array<number> = [];

  function dfs(node: number, component: Array<number>) {
    if (!visited.has(node)) {
      visited.add(node);
      component.push(node);
      (graph.get(node) || []).forEach((neighbor) => {
        dfs(neighbor, component);
      });
    }
  }

  graph.forEach((_, node) => {
    if (!visited.has(node)) {
      const component: Array<number> = [];
      dfs(node, component);
      if (component.length < 3) components.push(...component);
    }
  });

  return components.sort((a, b) => a - b).join(',');
}
