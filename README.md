# Eslint-config-nuecho

Eslint configuration for NuEcho typescript and javascript projects. Implements airbnb standards.

## How to use

Import this project in your `package.json` as a devDependency like:
```json
  "devDependencies": {
    "eslint-config-nuecho": "git+http://gl.s.nuecho.com/iva/eslint-config-nuecho.git#[TAGNAME]",
  }
```

Your project of course still needs to have a `.eslintignore` and a `.eslintrc.js`, in the nuecho config has to be extended as:

```javascript
module.exports = {
  ...
  extends: ['nuecho'],
  ...
};
````
