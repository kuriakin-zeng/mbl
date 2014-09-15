angular.module('product.services', [])
    .factory('ProductService', function($q) {
        var products = [
            { title: 'Shampoo', id: 1, img: "pics/James_King.jpg"},
            { title: 'Treatment', id: 2, img: "pics/Amy_Jones.jpg"},
            { title: 'Mask', id: 3, img: "pics/John_Williams.jpg" },
            { title: 'Serum', id: 4, img: "pics/Lisa_Wong.jpg" },
            { title: 'Styling', id: 5, img: "pics/Paul_Jones.jpg" },
            { title: 'Others', id: 6, img: "pics/Ray_Moore.jpg" }
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(products);
                return deferred.promise;
            },

            findById: function(productId) {
                var deferred = $q.defer();
                var product = products[productId - 1];
                deferred.resolve(product);
                return deferred.promise;
            },
        };
    });