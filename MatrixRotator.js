'use strict';
const Direction = require('./Direction').Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {

    let newArray = [];

    for (let i = 0; i < this.matrix.length; i++) {
      newArray[i] = this.matrix[i].slice();
    }

    if (direction === 'ClockWise') {
      for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[0].length; j++) {
          let changeRow = j - i;
          let changeColumn = this.matrix.length - 1 - (j + i);
          newArray[i + changeRow][j + changeColumn] = this.matrix[i][j];
        }
      }
    } else if (direction === 'CounterClockWise') {
      for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[0].length; j++) {
          let changeColumn = i - j;
          let changeRow = this.matrix.length - 1 - (j + i);
          newArray[i + changeRow][j + changeColumn] = this.matrix[i][j];
        }
      }
    }

    this.matrix = newArray;
  }
};

    // must be a valid Direction, see Direction.js