export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/cover": {
        return <div key={block.id}>Core Cover</div>;
      }
      default:
        return null;
    }
  });
};
