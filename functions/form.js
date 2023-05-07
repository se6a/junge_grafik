const InputText = getSnippet("input-text");
const InputTextShort = getSnippet("input-text-short");
const InputCheckbox = getSnippet("input-checkbox");
const InputSelection = getSnippet("input-select");
const InputFile = getSnippet("input-file");
const InputEmail = getSnippet("input-email");
const InputNumber = getSnippet("input-number");
const InputUrl = getSnippet("input-url");

module.exports = {
    create(name) {
        const formDef = getData(name);
        const $html = [];

        formDef.forEach((_group, index) => {
            _group.push(formDef.length - index);
            $html.push(this._run_rc(_group));
        });

        return ["formcontent", $html];
    },

    _run_rc(definition) {
        try {
            if (Array.isArray(definition)) return this._addGroup(definition);
            else return this._addField(definition);
        } catch (error) {
            console.error("ERROR", error);
            return "ERROR";
        }
    },

    _addField(field) {
        let $field = "";

        switch (field.type) {
            case "text-short":
                $field = InputTextShort(field);
                break;
            case "email":
                $field = InputEmail(field);
                break;
            case "url":
                $field = InputUrl(field);
                break;
            case "number":
                $field = InputNumber(field);
                break;
            case "text":
                $field = InputText(field);
                break;
            case "checkbox":
                $field = InputCheckbox(field);
                break;
            case "select-1":
                $field = InputSelection(field);
                break;
            case "file":
                $field = InputFile(field);
                break;
            default:
                $field = "field-type not found";
        }

        return ["formfield", ["", $field, ""]];
    },

    _addGroup(group) {
        const $group = [""];
        const groupZindex = group.pop();

        const columnClass = ["oneColumn", "twoColumns", "threeColumns"];

        const colCount =
            group.length % 3 === 0 || group.length > 6
                ? 3
                : group.length % 2 === 0 || group.length > 4
                ? 2
                : 1;

        group.forEach((_member, index) => {
            if (group.length > 1) _member.zindex = group.length - index;
            $group.push(this._run_rc(_member), "");
        });

        return [
            "fieldset",
            [
                `<fieldset class="formFieldGroup ${
                    columnClass[colCount - 1]
                }" style="z-index: ${groupZindex}">`,
                ...$group,
                "</fieldset>",
            ],
        ];
    },
};
