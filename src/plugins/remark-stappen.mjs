// Een kop "## Stap 3: Laat de bal botsen" wordt een genummerde stap.
// Het cijfer verhuist naar een data-attribuut zodat de pagina het groot
// kan tonen zoals in een bouwboekje. De koptekst zelf houdt enkel de titel.
const STAP = /^Stap\s+(\d+)\s*[:.]\s*/;

export default function remarkStappen() {
  return (tree) => {
    for (const node of tree.children ?? []) {
      if (node.type !== 'heading' || node.depth !== 2) continue;
      const eerste = node.children?.[0];
      if (!eerste || eerste.type !== 'text') continue;
      const match = eerste.value.match(STAP);
      if (!match) continue;
      eerste.value = eerste.value.replace(STAP, '');
      node.data = {
        ...node.data,
        hProperties: { ...node.data?.hProperties, className: ['stap'], 'data-stap': match[1] },
      };
    }
  };
}
