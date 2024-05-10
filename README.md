# qui-icons
All icons from MDI and fontawesome as webcomponents.

## Installation

```bash
npm i @qomponent/qui-icons
```

## Usage

```javascript
import '@qomponent/qui-icons';
```

### Size

 - tiny
 - small
 - normal
 - large
 - ??px                

Size can be provided with the `size` attribute.

### Color

Color can be provided with the `color` attribute.

### Fontawesome

See [fontawesome.com](https://fontawesome.com/)

 - Use `fas-icon` for solid free
 - Use `far-icon` for regular free
 - Use `fab-icon` for brands free

```html
<fas-icon icon="user" size="tiny"></fas-icon>
<fas-icon icon="user" size="small"></fas-icon>
<fas-icon icon="user"></fas-icon>
<fas-icon icon="user" size="large"></fas-icon>
<fas-icon icon="user" size="50px" color="red"></fas-icon>
            
<far-icon icon="clock" size="tiny"></far-icon>
<far-icon icon="clock" size="small"></far-icon>
<far-icon icon="clock"></far-icon>
<far-icon icon="clock" size="large"></far-icon>
<far-icon icon="clock" size="50px" color="red"></far-icon>
            
<fab-icon icon="redhat" size="tiny"></fab-icon>
<fab-icon icon="redhat" size="small"></fab-icon>
<fab-icon icon="redhat"></fab-icon>
<fab-icon icon="redhat" size="large"></fab-icon>
<fab-icon icon="redhat" size="50px" color="#ee0000"></fab-icon>
```

### MDI

See [mdisearch.com](https://mdisearch.com/)

```html
<mdi-icon icon="account" size="tiny"></mdi-icon>
<mdi-icon icon="account" size="small"></mdi-icon>
<mdi-icon icon="account"></mdi-icon>
<mdi-icon icon="account" size="large"></mdi-icon>
<mdi-icon icon="account" size="50px" color="red"></mdi-icon>

```

## Example

To run the example:

```bash
npm install
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)
