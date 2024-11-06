<div align="center">
   
# Conway's Game of Life

#### A Cellular Automaton Where Biology Meets Engineering

<img src="https://github.com/user-attachments/assets/e8aff285-68dd-486e-9cfe-9c40b7a8b5c4" alt="simulation"/><br/>

Conway's Game of Life is a cellular automaton devised by mathematician John Conway in 1970. It simulates the evolution of a grid of cells, which can be either alive or dead, based on a set of simple rules. With simple rules driving complex, evolving patterns, Conway’s Game of Life merges ideas from biology and engineering, showcasing how a set of discrete instructions can yield surprising, lifelike behaviors. 

</div>

--- 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Rules of the Game](#rules-of-the-game)

## Features

- Interactive grid where cells can be alive (1) or dead (0).
- Start and stop simulation of cell evolution.
- Non-toroidal grid behavior: cells on the edges do not wrap around to the opposite side.
- Responsive and intuitive user interface.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JuhilSavani/conways-game-of-life.git
   cd conways-game-of-life
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## How It Works

This application uses two main components:

- ControlPanel: Manages interactions like starting and stopping the simulation and resetting the grid.
- LifeGrid: Displays the evolving grid, calculating the next generation based on each cell’s neighbors.

Each generation, in the Game of Life is governed by a set of rules applied to each cell’s neighbors, determining whether a cell lives, dies, or is reborn.

## Rules of the Game

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

- Any live cell with fewer than two live neighbors dies (underpopulation).
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies (overpopulation).
- Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

These simple rules generate patterns that mimic the unpredictability and diversity found in natural systems, from stable formations to oscillators and complex, moving “life forms.” Experiment with different starting configurations

---

