import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  {
    id: 'a',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'drag me!' },
  },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -10, y: 100 },
    data: { label: 'drag me!' },
  },
  {
    id: 'c',
    type: 'position-logger',
    position: { x: 110, y: 100 },
    data: { label: 'drag me!' },
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
