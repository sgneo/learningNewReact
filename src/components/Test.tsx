import React, {
    ChangeEvent,
    useCallback,
    useContext,
    useDebugValue,
    useEffect,
    useMemo,
    useReducer,
    useRef,
    useState
} from 'react';

const THEMES = {
    light: {
        id: 0,
        fg: "#000000",
        bg: "#eeeeee"
    },
    dark: {
        id: 1,
        fg: "#ffffff",
        bg: "#222222"
    }
}

const ThemeContext = React.createContext(THEMES.light);

function ContextTest() {
    return (
        <ContextTestLeaf />
    )
}

function ContextTestLeaf() {
    const theme = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: theme.bg,
                width: "100px",
                height: "100px"
            }}>

        </div>
    )
}


enum ActionTypeCounter {
    Increment = 'increment',
    Decrement = 'decrement',
}


interface IStateCounter {
    count: number;
}

interface IActionCounter {
    type: ActionTypeCounter
}

const initialReduxState = {
    count: 0
};

function reducer(state: IStateCounter = initialReduxState, action: IActionCounter) {
    switch (action.type) {
        case ActionTypeCounter.Increment:
            return {
                count: state.count + 1
            }
        case ActionTypeCounter.Decrement:
            return {
                count: state.count - 1
            }
        default:
            break;
    }
}

function Test() {
    const [fName, setFname] = useState("");
    const [lName, setLFname] = useState("");
    const [theme, setTheme] = useState(THEMES.light);
    const [testEffect, setTestEffect] = useState(0);
    let i = 0;

    useDebugValue(fName ? 'Online' : 'Offline');


    useEffect(() => {
        console.log("i", i);
        setTestEffect(testEffect + 1);
    }, [fName])

    const computeFullname = (fName:String, lName:String) => `${fName} ${lName}`
    const fullName = useMemo(() => computeFullname(fName, lName), [fName, lName]);


    const [state, dispatch] = useReducer(reducer, initialReduxState)


    const inputToFocus = useRef(null);

    const onButtonClick = () => {
        // @ts-ignore
        inputToFocus.current.focus();
    }

    return (
        <div>
            First Name:
            <input type="text" value={fName} onChange={(e:ChangeEvent<HTMLInputElement>) => setFname(e.target.value)}/>
            Last Name: <
            input type="text" value={lName} onChange={(e:ChangeEvent<HTMLInputElement>) => setLFname(e.target.value)}/>
            {/*USE EFFECT*/}
            <p>
                numFnameChanges: {testEffect}
            </p>


            {/*USE MEMO*/}
            <p>
                fullName: {fullName}
            </p>

            {/*USE CONTEXT*/}

            <button onClick={() => setTheme(THEMES.dark)}>Set theme dark</button>
            <button onClick={() => setTheme(THEMES.light)}>Set Theme light</button>

            <ThemeContext.Provider value={theme}>
                <ContextTest />
            </ThemeContext.Provider>


            {/* USE REDUX  */}

            <button onClick={() => dispatch({
                type: ActionTypeCounter.Increment
            })}>Increment</button>

            <button onClick={() => dispatch({
                type: ActionTypeCounter.Decrement
            })}>Increment</button>

            <p>
                Count: { state && state.count }
            </p>

            {/*  USE REF  */}
            <button onClick={onButtonClick}>Focus the nice input below</button>
            <input ref={inputToFocus} type="text"/>

        </div>
    )
}


export default Test
