import { useState } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';

import { type PositionLoggerNode } from './types';

// 1. make a node configurable with a python script
// 2. request the POST /evaluate and get the result
// 3. deploy to clour run, configure CORS
// 4. figure a way connect the ReactFlow nodes together

export function PositionLoggerNode({
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}: NodeProps<PositionLoggerNode>) {
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;

  const [script, setScript] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json',
        },
        body: JSON.stringify({ script }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      alert(JSON.stringify(data));
    } catch (error) {
      alert('Error: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      <div>
        {x} {y}
      </div>

      <div>
        <label htmlFor="script">Script:</label>
        <textarea
          id="script"
          value={script || ''}
          onChange={(e) => setScript(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}