
// the parameter for components are the component properties
// you can unpack the properties using the JS {} syntax
// in this example, we unpacked the "children" property and "test" property
// "children" is a predefined prop, while "test" is one we can set in the call
// "children" represents the innerHTML of the component from the use

// We will be putting all of our css inside of Styled JSX <style jsx>
export default function Example({ children, test }) {
    // You can only return a single element.
    // If you have multiple elements, they must go inside a parent container
    return (
        <div>
            <h1>This is an example</h1> 
            <p>{ test }</p>
            { children }

            <style jsx>{`
                h1 {
                    font-size: 50px;
                    color: red
                }
            `}</style>
        </div>
    )

}
