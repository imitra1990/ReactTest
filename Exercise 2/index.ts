export function flatternObject(data: any, parent?: string): any
{
    let resultObject: any = {};

    Object.keys(data).forEach(key =>
    {
        const paramName: string = parent? parent+"."+key : key;

        // Check if the value is an object, if yes then recursively call the function
        if(typeof(data[key]) === 'object'){
                const child: any = flatternObject(data[key],paramName);
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