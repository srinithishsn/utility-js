const min = (array) =>{
    minValue=array[0];
    for(var index=1;index<array.length;index++)
    {
        if(minValue>array[index])
            minValue=array[index];   
    }
    return minValue;
}
module.exports = min