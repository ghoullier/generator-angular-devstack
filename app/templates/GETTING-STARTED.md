# Getting started

### Developpment

```
npm start
```

### Production

```
npm run build
```

# GETTING STARTTED

## Application structure

```sh
.
├── README.md
├── bower.json
├── Gulpfile.js
├── package.json
├── app             // Where you code
│   ├── scripts
│   ├── styles
│   │   └── images  // Images files
│   ├── views       // AngularJS views
│   └── index.html
└── tasks           // Gulp tasks
```

### Explanation app/scripts

```sh
.
├── modules         // All application modules
│   ├── common      // Transversal Services
│   ├── data        // Data Access Services
│   ├── templates   // Generated Views
│   └── ui          // UI Layer (Controllers, Directives, Filters, ...)
└── main.js
```

### Explanation app/index.html

```html
<html data-ng-app="application.ui" data-ng-strict-di>
```

- data-ng-app: Set entry point module to "application.ui
- data-ng-strict-di: Set dependency injection in strict mode
