<html>
  <head>
    <title>CRUD2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <!-- 1. Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    <script src="Angular2/node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="Angular2/node_modules/systemjs/dist/system-polyfills.js"></script>

    <script src="Angular2/node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="Angular2/node_modules/systemjs/dist/system.src.js"></script>
    <script src="Angular2/node_modules/rxjs/bundles/Rx.js"></script>
    <script src="Angular2/node_modules/angular2/bundles/angular2.dev.js"></script>
    <script src="Angular2/node_modules/angular2/bundles/http.dev.js"></script>
    <script src="Angular2/node_modules/angular2/bundles/router.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.2.js"   integrity="sha256-VUCyr0ZXB5VhBibo2DkTVhdspjmxUgxDGaLQx7qb7xY="   crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

    <!-- 2. Configure SystemJS -->
    <script>
        System.config({
            packages: {
                app: {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        });
        System.import('Angular2/app/main.js')
                .then(null, console.error.bind(console));
    </script>
</head>

<!-- 3. Display the application -->
<body>
    <div class="container">
        <init>Loading...</init>
    </div>
</body>
</html>
