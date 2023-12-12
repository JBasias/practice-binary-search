function linearSearch (A, T) {

  for(let i=0; i<A.length; i++)
  {
    if(A[i] === T) return i;
  }

  return -1;

  // Can you solve this in one line?

};

function binarySearch(A, T) {


  let b=0, e=A.length-1, m;

  while(b<=e)
  {
     m= Math.floor((b+e)/2);

     if(A[m]>T) e = m-1;
     else if(A[m]<T) b=m+1;
     else return m;

  }

  //if(A[m] === T) return m;

  return -1;



  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

    // Find the midpoint between high and low indices

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]
