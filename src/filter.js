const filter = (array,Function) => {
    if(array.length == 0)
    return array
    else
    {
        var newArray=[]
        for(var index=0;index<array.length;index++)
        {
            if(Function(array[index]))
                newArray.push(array[index]);
        }
        return newArray;
    }
}
module.exports = filter