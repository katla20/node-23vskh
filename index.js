const shapes = (grid) => {
  const visited = new Set();
  const adyacents = new Set();
  for (r = 0; r < grid.length; r += 1) {
    for (c = 0; c < grid[0].length; c += 1) {
      const neig = exploreForNeibor(grid, r, c, visited);
      if (neig) {
        console.log(neig, r, c);
      }
    }
  }
  ///console.log(visited);
  return visited;
};

const exploreForNeibor = (grid, r, c, visited, direc = '') => {
  rowInbounds = 0 <= r && r < grid.length;
  colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === 0) return false;

  pos = `(${r},${c})`;
  if (visited.has(pos)) return false;

  visited.add(pos);

  console.log('direc', `${direc}(${r},${c})`);

  rsub = r - 1;
  radd = r + 1;
  csub = c - 1;
  cadd = c + 1;

  exploreForNeibor(grid, rsub, c, visited, 'up'); // up
  exploreForNeibor(grid, radd, c, visited, 'down'); //down
  exploreForNeibor(grid, r, csub, visited, 'left'); //left
  exploreForNeibor(grid, r, cadd, visited, 'right'); //right

  return { post: `(${r},${c})`, direc: direc };
};

const grid = [
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 1],
  [1, 1, 1, 0, 0],
];

shapes(grid);
