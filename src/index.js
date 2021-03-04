
exports.min = function min (array) {
	if(array === undefined || array.length === 0) {
		return 0;
	}
	let result = Number.MAX_VALUE;
	for (let i = 0; i < array.length; i++){
		if (array[i] <= result) {
			let save = array[i]; 
            result = save;
        }
    }
return result;
}

exports.max = function max (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    let result = Number.MIN_VALUE;
    for (let i = 0; i < array.length; i++){
        if (array[i] >= result) {
            let save = array[i];     
            result = save;
        }
    }
return result;
}

exports.avg = function avg (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    let save = 0;
    for (let i = 0; i < array.length; i++){
    	save = save + array[i];
    }
    return save/array.length;
}
