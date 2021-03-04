const reduce = (array,Function,value) => {
    
    if(value==undefined)
        if(array.length==0)
            return value;
        else
            value="";
    
    for(var index=0;index<array.length;index++)
        value=Function(value,array[index]);
    
    return value;
}
module.exports = reduce