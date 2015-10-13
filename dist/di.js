define(["require", "exports"], function (require, exports) {
    var map = {};
    function get(clazz) {
        var instance;
        if (typeof clazz === "string") {
            instance = map[clazz];
        }
        else {
            register(clazz);
            var clazzName = clazz.name;
            instance = map[clazzName];
        }
        return instance;
    }
    exports.get = get;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpLnRzIl0sIm5hbWVzIjpbImdldCIsInJlZ2lzdGVyIiwiaW5qZWN0Il0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBSSxHQUFHLEdBQTZCLEVBQUUsQ0FBQztJQUd2QyxhQUFhLEtBQVM7UUFDckJBLElBQUlBLFFBQWFBLENBQUNBO1FBRWxCQSxFQUFFQSxDQUFBQSxDQUFDQSxPQUFPQSxLQUFLQSxLQUFLQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5QkEsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdkJBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLENBQUNBO1lBQ0xBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBRWhCQSxJQUFJQSxTQUFTQSxHQUFTQSxLQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtZQUNsQ0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBQ0FBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBO0lBQ2xCQSxDQUFDQTtJQW9CeUIsV0FBRyxPQXBCNUI7SUFFRDs7T0FFRztJQUNILGtCQUFrQixLQUFTO1FBQzFCQyxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFJQSxLQUFLQSxFQUFFQSxDQUFDQTtJQUNsREEsQ0FBQ0E7SUFhTyxnQkFBUSxZQWJmO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLEtBQVM7UUFDeEJDLE1BQU1BLENBQUNBLFVBQUNBLE1BQWNBLEVBQUVBLFdBQW1CQTtZQUMxQ0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbENBLENBQUNBLENBQUFBO0lBQ0ZBLENBQUNBO0lBR2lCLGNBQU0sVUFIdkI7SUFHNkIiLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbWFwOiB7W2NsYXNzTmFtZTpzdHJpbmddOmFueX0gPSB7fTtcclxuZnVuY3Rpb24gZ2V0KGNsYXNzTmFtZTpzdHJpbmcpOiBhbnlcclxuZnVuY3Rpb24gZ2V0PFQ+KGNsYXp6OntuZXcoKTpUfSk6IFRcclxuZnVuY3Rpb24gZ2V0KGNsYXp6OmFueSk6IGFueSB7XHJcblx0bGV0IGluc3RhbmNlOiBhbnk7XHJcblx0XHJcblx0aWYodHlwZW9mIGNsYXp6ID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRpbnN0YW5jZSA9IG1hcFtjbGF6el07XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0cmVnaXN0ZXIoY2xhenopO1xyXG5cdFx0XHJcblx0XHRsZXQgY2xhenpOYW1lID0gKDxhbnk+Y2xhenopLm5hbWU7XHJcblx0XHRpbnN0YW5jZSA9IG1hcFtjbGF6ek5hbWVdO1xyXG5cdH1cclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyB2aWEgbmV3KCkgYW5kIHJlZ2lzdGVyZXMgdGhpcyBpbnN0YW5jZSBmb3IgZGVwZW5kZW5jeSBpbmplY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlcihjbGF6ejphbnkpOiB2b2lkIHtcclxuXHRtYXBbY2xhenoubmFtZV0gPSBtYXBbY2xhenoubmFtZV0gfHwgbmV3IGNsYXp6KCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpbmplY3RzIGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBzcGVjaWZpZWQgY2xhc3NcclxuICogQHBhcmFtIGNsYXp6IHRoZSBjbGF6eiB3aGljaCBpbnN0YW5jZSBvbmUgd25hdCB0byBpbmpldFxyXG4gKi9cclxuZnVuY3Rpb24gaW5qZWN0KGNsYXp6OmFueSk6IFByb3BlcnR5RGVjb3JhdG9yIHtcclxuXHRyZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XHJcblx0XHR0YXJnZXRbcHJvcGVydHlLZXldID0gZ2V0KGNsYXp6KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5leHBvcnQge3JlZ2lzdGVyLCBpbmplY3QsIGdldH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=