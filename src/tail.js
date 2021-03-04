const tail = (array) => {
    
    var arrayLength=array.length;
    if(arrayLength==0)
    return array
    else
    return array.slice(1,arrayLength);
}
module.exports = tail