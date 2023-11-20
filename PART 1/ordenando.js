window.swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
  };
  
  window.shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const randomIndex1 = Math.floor(Math.random() * array.length);
      const randomIndex2 = Math.floor(Math.random() * array.length);
      window.swap(array, randomIndex1, randomIndex2);
    }
  };
  
  window.bubble_sort = (array) => {
    const len = array.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (array[i] > array[i + 1]) {
          window.swap(array, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped);
  };
  
  window.selection_sort = (array) => {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        window.swap(array, i, minIndex);
      }
    }
  };
  
  window.quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start >= end) return;
  
    const pivotIndex = window.partition(array, start, end);
    window.quick_sort(array, start, pivotIndex - 1);
    window.quick_sort(array, pivotIndex + 1, end);
  };
  
  window.partition = (array, start, end) => {
    const pivot = array[end];
    let i = start;
  
    for (let j = start; j < end; j++) {
      if (array[j] < pivot) {
        window.swap(array, i, j);
        i++;
      }
    }
    window.swap(array, i, end);
    return i;
  };
  