const InputText      = getSnippet("input-text");
const InputTextShort = getSnippet("input-text-short");
const InputCheckbox  = getSnippet("input-checkbox");
const InputSelection = getSnippet("input-select");
const InputFile      = getSnippet("input-file");

module.exports = {
  create(name) {
    const formDef = require(`${__basedir}/client/data/${name}.data`);
    const $html = [];

    formDef.forEach((_group, index) => {
      _group.push(formDef.length - index);
      $html.push(this._run_rc(_group));
    });

    return ["formcontent", $html];
  },

  _run_rc(definition) {
    try {
      if (Array.isArray(definition))
        return this._addGroup(definition);
      else
        return this._addField(definition);
    }
    catch (error) {
      console.log("ERROR", error);
      return "ERROR";
    }
  },

  _addField(field) {
    let $field = "";

    switch (field.type) {
      case "text-short":
      case "text-year":
        $field = InputTextShort(field);
        break;
      case "text":
        $field = InputText(field);
        break;
      case "select-1":
        $field = InputSelection(field);
        break;
      case "file":
        $field = InputFile(field);
        break;
    };

    return ["formfield", ["", $field, ""]];
  },

  _addGroup(group) {
    const $group = [""];
    const groupZindex = group.pop();

    group.forEach((_member, index) => {
      if (group.length > 1)
        _member.zindex = group.length - index;
      $group.push(this._run_rc(_member), "");
    });

    return [
      "fieldset",
      [
        `<fieldset class="formFieldGroup" style="z-index: ${groupZindex}">`,
        ...$group,
        "</fieldset>"
      ]
    ];
  }
};
