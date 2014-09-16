angular.module('product.services', [])
.factory('ProductService', function($q) {
    var categories = [
        { title: 'Shampoo', id: 1, img: "pics/James_King.jpg"},
        { title: 'Treatment', id: 2, img: "pics/Amy_Jones.jpg"},
        { title: 'Mask', id: 3, img: "pics/John_Williams.jpg" },
        { title: 'Serum', id: 4, img: "pics/Lisa_Wong.jpg" },
        { title: 'Styling', id: 5, img: "pics/Paul_Jones.jpg" },
        { title: 'Others', id: 6, img: "pics/Ray_Moore.jpg" }
    ];

    var brands = {
        category : "Shampoo",
        brands: [
            { title: 'Toni & Guy', id: 1, img: "pics/James_King.jpg"},
            { title: 'Neutrogena', id: 2, img: "pics/Amy_Jones.jpg"},
            { title: 'Paul Mitchell', id: 3, img: "pics/John_Williams.jpg" }
        ]
    };

    var products = {
        brand : "Toni & Guy",
        products: [
            { title: 'Toni&Guy Cleanse Shampoo for Damaged Hair', id: 123, img: "pics/Lisa_Wong.jpg"},
            { title: 'Toni&Guy Cleanse Dry Shampoo', id: 456, img: "pics/Paul_Jones.jpg"},
        ]
    };

    var product = {
        id: 123,
        title: 'Toni&Guy Cleanse Shampoo for Damaged Hair',
        img: "pics/Lisa_Wong.jpg"
    };

    // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
    // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
    // service with a JSON service that gets its data from a remote server without having to changes anything
    // in the modules invoking the data service since the api is already async.

    return {
        findAllCategories: function() {
            var deferred = $q.defer();
            deferred.resolve(categories);
            return deferred.promise;
        },

        findBrandsByCategoryId: function(categoryId) {
            var deferred = $q.defer();
            deferred.resolve(brands);
            return deferred.promise;
        },

        findProductsByBrandId: function(brandId){
            var deferred = $q.defer();
            deferred.resolve(products);
            return deferred.promise;
        },

        findProductById: function(productId){
            var deferred = $q.defer();
            deferred.resolve(product);
            return deferred.promise;
        }
    };
})
;