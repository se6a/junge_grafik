module.exports = {
    meta: {
        title: "Submit!",
        description: "Submit your project!",
        indexed: true,
    },
    form: {
        sections: [
            {
                type: "rows",
                length: 2,
                content: [
                    {
                        type: "text",
                        title: "Step 1",
                        content: `
<ul>
    <li class="dash">You submit your project via the registration form.</li>
    <li class="dash">You will receive the payment request for your project by email.</li>
    <li class="dash">Your payment will be confirmed by email within a week.</li>
</ul>
                            `,
                    },

                    {
                        type: "text",
                        title: "Step 2",
                        content: `
<ul>
    <li class="dash">On September 1st, we will inform you whether your project has made it to the second round or not.</li>
    <li class="dash">If your project advances to the second round, we will inform you whether you need to additionally submit your project in analog form.</li>
    <li class="dash">We accept analog submissions between September 3rd and September 16th. We will send your project back to you by mid-October.</li>
</ul>
                      
                            `,
                    },

                    {
                        type: "text",
                        title: "Step 3",
                        content: `
<ul>
    <li class="dash">On September 29th, you will be informed whether your project has won a prize or not.</li>
    <li class="dash">If you have won a prize, we will contact you in October via video call to conduct an interview about your project.</li>
</ul>
                            `,
                    },

                    {
                        type: "text",
                        title: "Step 4",
                        content: `
<ul>
    <li class="dash">On November 18th 2023, the awards ceremony Junge Grafik – Jeune Graphisme – Giovane Grafica will take place, followed by a party at Neubad Luzern. Reserve the date now so you don’t miss the event.</li>
</ul>
                            `,
                    },
                ],
            },
        ],
    },
    footer: true,
};
