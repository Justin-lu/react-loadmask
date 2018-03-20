# react-loadmask

[![Greenkeeper badge](https://badges.greenkeeper.io/Justin-lu/react-loadmask.svg)](https://greenkeeper.io/)

![Build Status](https://img.shields.io/travis/Justin-lu/react-loadmask.svg)
![Coverage](https://img.shields.io/coveralls/Justin-lu/react-loadmask.svg)
![Downloads](https://img.shields.io/npm/dm/react-loadmask.svg)
![Downloads](https://img.shields.io/npm/dt/react-loadmask.svg)
![npm version](https://img.shields.io/npm/v/react-loadmask.svg)
![dependencies](https://img.shields.io/david/Justin-lu/react-loadmask.svg)
![dev dependencies](https://img.shields.io/david/dev/Justin-lu/react-loadmask.svg)
![License](https://img.shields.io/npm/l/react-loadmask.svg)

loading mask for react

## Getting Started

Install it via npm:

```shell
npm install react-loadmask
```

1. Add this [style](https://raw.githubusercontent.com/Justin-lu/react-loadmask/master/src/style.css) to you css/scss

2. Add this js to you porject

```javascript
import LoadMask from 'react-loadmask';
```

## Using in redux

You can define a reduer like this

```javascript
export function todos(state , action) {
  switch (action.type) {
  case REQUEST_TODO:
    return Object.assign({}, state, { isLoading: true });
  case RECEIVE_ACTIVATED_DEVICES:
    return Object.assign({}, state, { isLoading: false });
  default:
    return state;
  }
}
```

Add `LoadMask` to your compoments as a wrapper

```html
<LoadMask dataLength={todos.length} isLoading={todos.isLoading}>
  <div>
    <p>I'm todo list</p>
  </div>
</LoadMask>
```

Now, you compoments will auto should loading mask when you are make an ajax request

## License

MIT
