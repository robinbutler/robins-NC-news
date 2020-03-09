export default function sketch(p) {
  const make2DArray = (cols, rows) => {
    let arr = new Array(rows);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(cols);
    }
    return arr;
  };
  let grid;
  let cols;
  let rows;
  let resolution = 10;
  p.setup = function() {
    const windowHeight = window.innerHeight - 250;
    const windowWidth = windowHeight;

    p.createCanvas(windowWidth, windowHeight);
    cols = Math.round(windowWidth / resolution / 10) * 10;
    rows = Math.round(windowHeight / resolution / 10) * 10;
    grid = make2DArray(rows, cols);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = Math.floor(Math.random() * 2);
      }
    }
  };

  const countNeighbors = (grid, x, y) => {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;
        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
  };

  p.draw = function() {
    p.background(0);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] === 1) {
          p.fill(255);
          p.stroke(0);
          p.rect(x, y, resolution - 1, resolution - 1);
        }
      }
    }

    let next = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let state = grid[i][j];
        let neighbors = countNeighbors(grid, i, j);

        if (state === 0 && neighbors === 3) {
          next[i][j] = 1;
        } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }

    grid = next;
  };
}
