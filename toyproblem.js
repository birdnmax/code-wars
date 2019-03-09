var arr = [1, 2, 3, 4, 5];

function firstReverseTry(arr){
    //find first element in array []
    const first = arr[0];

    //find last element in array []
        //find the last index (arr.length)
    const lastIndex = arr.length -1;
    const last = arr[lastIndex];

    //set the first item in array to last
    arr[0] = last;

    //set the last item in array to first
    arr[lastIndex] = first;
    
    //return array
    return arr;
}

///steps for coding
//clarify problem
//create sample solutions
    //[0, 2, 3] > [3, 2, 0]
    //[0, 2] > [2, 0]
//pseudo code (tools I can use)

//find values
    //find first value([])
    //find last value([])
        //find the last index (array.length)
//swap values
    //set first value to last
    //set last value to first
//return array
