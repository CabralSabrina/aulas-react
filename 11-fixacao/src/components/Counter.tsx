// Counter.tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={increment}>Aumentar</button>
    </div>
  );
};

export default Counter;