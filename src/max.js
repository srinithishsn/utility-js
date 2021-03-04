const max = (array) =>{
    maxValue=array[0];
    for(var index=1;index<array.length;index++)
    {
        if(maxValue<array[index])
            maxValue=array[index];   
    }
    return maxValue;
}
module.exports = max