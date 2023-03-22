const removeFromArray = function(array,par1,par2,par3,par4){   
    par1 = par1 || undefined;
    par2 = par2 || undefined;
    par3 = par3 || undefined;
    par4 = par4 || undefined;

    const arrayRemoved = [];
    for (item of array) {
        if (
            item===par1 ||
            item===par2 ||
            item===par3 ||
            item===par4 )
           { continue }
        arrayRemoved.push(item);
    }
    return arrayRemoved;
};

// Do not edit below this line
module.exports = removeFromArray;
