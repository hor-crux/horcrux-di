define(["require", "exports"], function (require, exports) {
    var map = {};
    function get(clazz) {
        register(clazz);
        var clazzName = clazz.name;
        var instance = map[clazzName];
        return instance;
    }
    /**
     * Creates an instance of this class via new() and registeres this instance for dependency injection.
     */
    function register(clazz) {
        map[clazz.name] = map[clazz.name] || new clazz();
    }
    exports.register = register;
    /**
     * injects a singleton instance of the specified class
     * @param clazz the clazz which instance one wnat to injet
     */
    function inject(clazz) {
        return function (target, propertyKey) {
            target[propertyKey] = get(clazz);
        };
    }
    exports.inject = inject;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpLnRzIl0sIm5hbWVzIjpbImdldCIsInJlZ2lzdGVyIiwiaW5qZWN0Il0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBSSxHQUFHLEdBQTZCLEVBQUUsQ0FBQztJQUV2QyxhQUFnQixLQUFlO1FBQzlCQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUVoQkEsSUFBSUEsU0FBU0EsR0FBU0EsS0FBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDbENBLElBQUlBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO1FBRTlCQSxNQUFNQSxDQUFJQSxRQUFRQSxDQUFDQTtJQUNwQkEsQ0FBQ0E7SUFFRDs7T0FFRztJQUNILGtCQUFrQixLQUFTO1FBQzFCQyxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxLQUFLQSxFQUFFQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFZTyxnQkFBUSxZQVpmO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLEtBQVM7UUFDeEJDLE1BQU1BLENBQUNBLFVBQUNBLE1BQWNBLEVBQUVBLFdBQW1CQTtZQUMxQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbENBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBRWlCLGNBQU0sVUFGdkI7SUFFd0IiLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbWFwOiB7W2NsYXNzTmFtZTpzdHJpbmddOmFueX0gPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGdldDxUPihjbGF6ejp7bmV3KCk6VH0pOiBUIHtcclxuXHRyZWdpc3RlcihjbGF6eik7XHJcblx0XHJcblx0bGV0IGNsYXp6TmFtZSA9ICg8YW55PmNsYXp6KS5uYW1lO1xyXG5cdGxldCBpbnN0YW5jZSA9IG1hcFtjbGF6ek5hbWVdO1xyXG5cdFxyXG5cdHJldHVybiA8VD5pbnN0YW5jZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyB2aWEgbmV3KCkgYW5kIHJlZ2lzdGVyZXMgdGhpcyBpbnN0YW5jZSBmb3IgZGVwZW5kZW5jeSBpbmplY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlcihjbGF6ejphbnkpOiB2b2lkIHtcclxuXHRtYXBbY2xhenoubmFtZV0gPSBtYXBbY2xhenoubmFtZV0gfHwgbmV3IGNsYXp6KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpbmplY3RzIGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBzcGVjaWZpZWQgY2xhc3NcclxuICogQHBhcmFtIGNsYXp6IHRoZSBjbGF6eiB3aGljaCBpbnN0YW5jZSBvbmUgd25hdCB0byBpbmpldFxyXG4gKi9cclxuZnVuY3Rpb24gaW5qZWN0KGNsYXp6OmFueSk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuXHRyZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XHJcblx0XHR0YXJnZXRbcHJvcGVydHlLZXldID0gZ2V0KGNsYXp6KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVnaXN0ZXIsIGluamVjdH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=