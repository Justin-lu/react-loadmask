# react-loadmask

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

Add this style to you css/scss

```css
.loading-center {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  height: 100%;
  font-size: 32px;
  color: #888;
}

#circularG{
  position:relative;
  width:33px;
  height:33px;
  margin: auto;
}

.circularG{
  position:absolute;
  background-color:rgb(136,136,136);
  width:8px;
  height:8px;
  border-radius:5px;
    -o-border-radius:5px;
    -ms-border-radius:5px;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
  animation-name:bounce_circularG;
    -o-animation-name:bounce_circularG;
    -ms-animation-name:bounce_circularG;
    -webkit-animation-name:bounce_circularG;
    -moz-animation-name:bounce_circularG;
  animation-duration:0.338s;
    -o-animation-duration:0.338s;
    -ms-animation-duration:0.338s;
    -webkit-animation-duration:0.338s;
    -moz-animation-duration:0.338s;
  animation-iteration-count:infinite;
    -o-animation-iteration-count:infinite;
    -ms-animation-iteration-count:infinite;
    -webkit-animation-iteration-count:infinite;
    -moz-animation-iteration-count:infinite;
  animation-direction:normal;
    -o-animation-direction:normal;
    -ms-animation-direction:normal;
    -webkit-animation-direction:normal;
    -moz-animation-direction:normal;
}

#circularG_1{
  left:0;
  top:13px;
  animation-delay:0.128s;
    -o-animation-delay:0.128s;
    -ms-animation-delay:0.128s;
    -webkit-animation-delay:0.128s;
    -moz-animation-delay:0.128s;
}

#circularG_2{
  left:3px;
  top:3px;
  animation-delay:0.164s;
    -o-animation-delay:0.164s;
    -ms-animation-delay:0.164s;
    -webkit-animation-delay:0.164s;
    -moz-animation-delay:0.164s;
}

#circularG_3{
  top:0;
  left:13px;
  animation-delay:0.21s;
    -o-animation-delay:0.21s;
    -ms-animation-delay:0.21s;
    -webkit-animation-delay:0.21s;
    -moz-animation-delay:0.21s;
}

#circularG_4{
  right:3px;
  top:3px;
  animation-delay:0.256s;
    -o-animation-delay:0.256s;
    -ms-animation-delay:0.256s;
    -webkit-animation-delay:0.256s;
    -moz-animation-delay:0.256s;
}

#circularG_5{
  right:0;
  top:13px;
  animation-delay:0.292s;
    -o-animation-delay:0.292s;
    -ms-animation-delay:0.292s;
    -webkit-animation-delay:0.292s;
    -moz-animation-delay:0.292s;
}

#circularG_6{
  right:3px;
  bottom:3px;
  animation-delay:0.338s;
    -o-animation-delay:0.338s;
    -ms-animation-delay:0.338s;
    -webkit-animation-delay:0.338s;
    -moz-animation-delay:0.338s;
}

#circularG_7{
  left:13px;
  bottom:0;
  animation-delay:0.374s;
    -o-animation-delay:0.374s;
    -ms-animation-delay:0.374s;
    -webkit-animation-delay:0.374s;
    -moz-animation-delay:0.374s;
}

#circularG_8{
  left:3px;
  bottom:3px;
  animation-delay:0.42s;
    -o-animation-delay:0.42s;
    -ms-animation-delay:0.42s;
    -webkit-animation-delay:0.42s;
    -moz-animation-delay:0.42s;
}



@keyframes bounce_circularG{
  0%{
    transform:scale(1);
  }

  100%{
    transform:scale(.3);
  }
}

@-o-keyframes bounce_circularG{
  0%{
    -o-transform:scale(1);
  }

  100%{
    -o-transform:scale(.3);
  }
}

@-ms-keyframes bounce_circularG{
  0%{
    -ms-transform:scale(1);
  }

  100%{
    -ms-transform:scale(.3);
  }
}

@-webkit-keyframes bounce_circularG{
  0%{
    -webkit-transform:scale(1);
  }

  100%{
    -webkit-transform:scale(.3);
  }
}

@-moz-keyframes bounce_circularG{
  0%{
    -moz-transform:scale(1);
  }

  100%{
    -moz-transform:scale(.3);
  }
}
```

Add this js to you porject

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
