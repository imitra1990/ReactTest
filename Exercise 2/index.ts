type Flattern = {
    [key: string]: object | string | number | boolean;
}

export function flatternObject(data: object, parent?: string): Flattern
{
    let resultObject: Flattern = {};

    Object.keys(data).forEach(key =>
    {
        const paramName: string = parent? parent+"."+key : key;

        // recursively calling the function with this value
        if(typeof(data[key]) === 'object' && data[key] !== null){
                const child: Flattern = flatternObject(data[key],paramName);
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