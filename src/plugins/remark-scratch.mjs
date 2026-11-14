// Zet codeblokken met taal "scratch" om naar <pre class="blocks">.
// Zo schrijf je blokjes als gewone tekst in Markdown en tekent scratchblocks
// ze in de browser. Zonder deze stap zou Starlight ze als broncode tonen.
export default function remarkScratch() {
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'code' && node.lang === 'scratch') {
        node.type = 'scratchblokjes';
        node.data = {
          hName: 'pre',
          hProperties: { className: ['blocks'] },
          hChildren: [{ type: 'text', value: node.value }],
        };
        return;
      }
      if (node.children) node.children.forEach(walk);
    };
    walk(tree);
  };
}
