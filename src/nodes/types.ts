import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string, script: string }, 'position-logger'>;
export type AppNode = BuiltInNode | PositionLoggerNode;
