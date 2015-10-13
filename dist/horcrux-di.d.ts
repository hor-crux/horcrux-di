declare module "horcrux-di" {
export {	register,	inject,	get}
 function get(className: string): any;
 function get<T>(clazz: {
    new (): T;
}): T;
/**
 * Creates an instance of this class via new() and registeres this instance for dependency injection.
 */
 function register(clazz: any): void;
/**
 * injects a singleton instance of the specified class
 * @param clazz the clazz which instance one wnat to injet
 */
 function inject(clazz: any): PropertyDecorator;
}