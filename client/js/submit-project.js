document.addEventListener("DOMContentLoaded", () => {
    const path = this.location.pathname;

    if (path.startsWith("/submit")) {
        preselectLanguage("ProjectRegistrationLang");
        window.projectForm = new ProjectForm();
    }
});

function preselectLanguage(formId) {
    const lang = document.body.dataset.lang;
    const $field = document.querySelector(
        `#${formId} .Language .Select.inputBox.outer`
    );
    const $option = $field.querySelector(`.option[data-id="${lang}"]`);
    selectOption($field, $option);
}

function setFormLanguage(e) {
    e.preventDefault();
    const $langForm = e.target;
    const $langInput = $langForm.querySelector('input[name="fields[language]"');
    const lang = $langInput.value;

    if (!lang) {
        $langInput.classList.add("--invalid");
    } else {
        const $ViewSubmit = document.querySelector(".VIEW.Submit");
        scrollToTop();

        $ViewSubmit.lang = lang;
        document.body.dataset.lang = lang;
        $langInput.classList.remove("--invalid");
    }
}

/* SUBMIT PROJECT FORM
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/* Form
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
const ProjectForm = function () {
    const instance = {
        $form: document.getElementById("SubmitProjectForm"),

        async submit(e) {
            e.preventDefault();

            this.feedbackSending();

            const formdata = new FormData(this.$form);

            await this.appendFiles(formdata);
            this.appendLanguage(formdata);
            this.appendAction(formdata);
            this.formatLinks(formdata);

            postRequest("newproject", formdata)
                .then((res) => {
                    if (res.status === 200) {
                        this.reset();
                        this.feedbackSuccess();
                    } else {
                        this.feedbackError();
                    }
                })

                .catch(() => {
                    this.feedbackError();
                });
        },

        formatLinks(formdata) {
            const pattern =
                /(^https?:\/\/)?(www\.)?([^www][a-zA-Z0-9æøåöäüéÆØÅÖÄÜÉ]{2,})(\.[a-zA-Z]{2,})(\/.*)?/;

            [...formdata].forEach((_field) => {
                const _name = _field[0];
                const _value = _field[1];

                if (_name.startsWith("fields[link") && _value) {
                    const _newLink = (pattern.exec(_value) || [])
                        .filter((item, i) => i > 0)
                        .map((item, i) => (i === 0 && !item ? "http://" : item))
                        .filter((item) => item)
                        .join("");

                    formdata.set(_name, _newLink);
                }
            });
        },

        appendFiles(formdata) {
            const selected = fileInputs.ProjectFileUpload.selected;
            formdata.delete("file");

            for (const _fileName in selected) {
                formdata.append("files", selected[_fileName]);
            }
        },

        appendLanguage(formdata) {
            const lang = document.body.dataset.lang;

            let langId = 0;

            switch (lang) {
                case "it":
                    langId = 698;
                    break;
                case "fr":
                    langId = 699;
                    break;
                case "de":
                default:
                    langId = 697;
                    break;
            }

            formdata.append("fields[sprache]", langId);
        },

        appendAction(formdata) {
            formdata.append("action[einreichung]", "submit");
        },

        feedbackSending() {
            this.$form.dataset.state = "sending";
        },

        feedbackError() {
            this.$form.dataset.state = "error";
        },

        feedbackSuccess() {
            const lang = document.body.dataset.lang;
            window.location.href = `${HOST}/submission-completed?lang=${lang}`;
        },

        reset() {
            this.$form.reset();
            this.$form.dataset.state = "initial";
        },
    };

    instance.$form.addEventListener("submit", (e) => instance.submit(e));

    return instance;
};
