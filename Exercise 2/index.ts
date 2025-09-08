export function flatternObject(data, parent?)
{
    let resultObject = {};

    data.forEach(key =>
    {
        const paramName = parent? parent+"."+key : key;
        if(typeof(data[key]) === 'object'){
                const child = flatternObject(data[key],paramName);
                resultObject = {...resultObject, ...child};
            }
        else{
            resultObject = {...resultObject,
                [paramName]:data[key]
            }
        }
    });
    return resultObject;
}