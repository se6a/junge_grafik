module.exports.onclick = (callback) => {
  return (callback
            ? ` onclick="${callback}" `
            : ""
          );
};

module.exports.onsubmit = (callback) => {
  return (callback
            ? ` onsubmit="${callback}" `
            : ""
          );
};

module.exports.onchange = (callback) => {
  return (callback
            ? ` onchange="${callback}" `
            : ""
          );
};

module.exports.onchecked = (callback) => {
  return (callback
            ? ` onchange="this.checked ? ${callback} : null" `
            : ""
          );
};
