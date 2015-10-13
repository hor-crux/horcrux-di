let map: {[className:string]:any} = {};
function get(className:string): any
function get<T>(clazz:{new():T}): T
function get(clazz:any): any {
	let instance: any;
	
	if(typeof clazz === "string") {
		instance = map[clazz];
	}
	else {
		register(clazz);
		
		let clazzName = (<any>clazz).name;
		instance = map[clazzName];
	}
		return instance;
}

/**
 * Creates an instance of this class via new() and registeres this instance for dependency injection.
 */
function register(clazz:any): void {
	map[clazz.name] = map[clazz.name] || new clazz();
}

/**
 * injects a singleton instance of the specified class
 * @param clazz the clazz which instance one wnat to injet
 */
function inject(clazz:any): PropertyDecorator {
	return (target: Object, propertyKey: string) => {
		target[propertyKey] = get(clazz);
	}
}


export {register, inject, get}