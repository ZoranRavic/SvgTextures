# SVG Textures

Create simple and interesting backgrounds with a single line of code.

[Check out the live demo with code examples!](https://zoranravic.com/svg-textures)

### Use the same textures anywhere

The SVG utilities are based on [Virtual Elements](https://github.com/ZoranRavic/VElements).

This means that you can create textures in the Browser in real time or you can generate .svg files in Node.

If you have a React app simply do `.toReactElement()`, eg:

```jsx harmony
const MyReactComponent = (props) =>
{
    return (
        <div>
            <MyOtherComponent/>
            {svgRectPatternLine().toReactElement()}
        </div>
    );
}
```
