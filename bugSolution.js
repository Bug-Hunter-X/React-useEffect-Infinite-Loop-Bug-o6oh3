```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Set count once on mount
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array ensures only one execution

  return <div>Count: {count}</div>;
}
```