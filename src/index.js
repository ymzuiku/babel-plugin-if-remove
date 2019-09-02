export default function({ types: t }) {
  return {
    visitor: {
      IfStatement(path) {
        if (
          path.node &&
          path.node.test &&
          path.node.test.value === 'babel-remove'
        )
          path.remove();
      },
    },
  };
}
