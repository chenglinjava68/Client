import React, { useState } from 'react';
import { TMemo } from '@shared/components/TMemo';
import { RichTextEditor } from '@web/components/editor/RichTextEditor';
import { Node } from 'slate';

const EditorDemo: React.FC = TMemo(() => {
  const [value, setValue] = useState<Node[]>([]);
  return <RichTextEditor value={value} onChange={setValue} />;
});
EditorDemo.displayName = 'EditorDemo';

export default EditorDemo;
