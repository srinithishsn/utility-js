
const map = (array,Function) => {
   
        if(array.length==0)
        return array;
        else
        {
            for(var index=0;index<array.length;index++)
            {
                array[index]=Function(array[index]);
            }
            return array; 
        }
 }
 module.exports = map