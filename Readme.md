# CSS-in-JS package for React

This package is based on BauCSS and adds a `styled` component for React.

[![npm bundle size](https://img.badgesize.io/ndrean/bau-react-css/main/src/bau-reactcss.js?compression=gzip)](https://bundlephobia.com/package/bau-reactcss@0.1.2)

## Usage

```js
import BauReactCss from "bau-reactcss";

const { css, styled, keyframes, createGlobaStyles } = BauReactCss();
```

## Worked example

<https://github.com/ndrean/bau-react-css/tree/main/example>

## Create global styles

```js
createGlobalStyles`
  :root {
      margin: 0px;
      --main-color: midnightblue;
  }
`;
```

## Create a class

```jsx
const blue = css`
  color: var(--main-color);
`;

<p className={blue}>A blue paragraph</p>;
```

You can create a component:

```jsx
const colored = (props)=> css`
  color: ${props.color ?? "var(--main-color)"};
`;

const P = (props) => {
  const {children, ...rest} = props
  <p className={colored(props)} {...rest}>{children}</p>
)
}

<P>A blue paragraph</P>
<P color="red">A red paragraph</P>
```

## Create a styled component

```jsx
const Btn = (props) => style("button", props)`
  cursor: pointer;
  color: ${props.color};
`;

<Btn color="blue">Blue button</Btn>;
```

## Create a keyframe

```js
const rescale = keyframes`
  0% {transform: scale(0.5)}
  100% {transform: scale(1)}
`;

const red = css`
  color: red;
   animation: ${rescale} 1s ease infinite;
`

<p className={red}>Check this</p>
```

## Example of conditional classes

You have two ways to use it. Define a function or object that returns CSS strings:

```jsx
const styles = (props) => {
  base: `
    cursor: pointer;
    font-size: ${props.size ?? 1}em;
    border-radius: 0.3em;
    padding: 0.3em;
  `,
  danger: `
    color: red;
    animation: ${rescale} 1s ease infinite;
  `,
  disabled: `
    pointer-events: none;
    opacity: ${props.opacity};
  `;
}
```

You can write:

```jsx
const Btn = (props)=> styled('button', props)`
  ${styles(props).base +
  props.danger ? styles(props).danger : ""}
`

<Btn>Base button</Btn>
<Btn danger="true" onClick={()=> alert('danger')}>Danger button</Btn>
```

To make life easier, the primitive `styled` can read the props and sets the class when you use the styles object above:

```jsx
const Button = (props) => styled("button", props)`
  ${styles(props).base}
  ${styles(props)}
`;

<Button>Base Button</Button>
<Button
  danger="true"
  className={css`
    box-shadow: 6px -6px bisque;
  `}
>
  Shadowed Danger
</Button>;
```
