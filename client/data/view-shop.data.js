module.exports = {
    meta: {
        title: "",
        description:
            "Junge Grafik showcases, connects and promotes young and talented graphic designers from across Switzerland.",
        indexed: true,
    },
    header: {
        image: "publication/publication-preview-2023-__SIZE__-lnd-01.jpg",
        content: '<div class="HeaderColors"></div>',
    },
    sections: [
        {
            type: "columns",
            content: [
                {
                    type: "text",
                    title: "2023 Junge Grafik Publication",
                    content: `
<p>
    The 2023 Junge Grafik publication offers a behind-the-scenes glimpse into this years edition, the works of the 30 winners and the meticulous selection process. Across 120 visible pages (and a few discreetly hidden ones), the publication unfolds in 4 acts, narrating a curated story that features some of the project’s most important actresses and actors such as the jury, the celebrated winners and a selection of esteemed patrons and sponsors.
</p>

</br>

<ul>
    <li>CHF 45.00 per copy</li>
    <li>CHF 25.00 per copy (for students)</li>
</ul>

</br>

<p>
    To order your copy, please follow these two steps:
</p>

</br>

<ol class="Steps">
    <li>
        <h3>→ Step 1</h3>
        <p>
            Send an email to info@jungegrafik.ch with the following details:
        </p>
        <ul>
            <li class="dash">Number of copies you would like to order</li>
            <li class="dash">Full address (Name, street, house number, postal code, city)</li>
            <li class="dash">To receive the student discount, let us know where you are studying.</li>
        </ul>
    </li>
    <li>
        <h3>→ Step 2</h3>
        <p>Pay the right amount corresponding to your order:</p>
        <ul>
            <li class="dash">CHF 45 per copy, CHF 25 per copy (for students)</li>
            <li class="dash">Twint: Please enter your name in the comment field, so we can trace the payment back to you.</li>
            <li class="dash">Bank transfer: Please enter your name in the comment field, so we can trace the payment back to you.</li>
        </ul>
    </li>
</ol>

<p>
    As soon as your payment is confirmed, we will ship your copy.
    Please note that shipping may take 2 to 10 business days.
</p>

                    `,
                },

                {
                    type: "rows",
                    length: 1,
                    classes: "PaymentOptions",
                    content: [
                        {
                            type: "text",
                            title: "Twint",
                            content: /*html*/ `
<div class="TwintQR">
    <img class="image" alt="Twint-QR: Custom Amount" width="1087" height="496" src="/media/twint/TWINT_Custom-Amount_EN.png">
</div>
                    
                  `,
                        },
                        {
                            type: "text",
                            title: "Bank transfer",
                            content: /*html*/ `
<ul>
    <li>UBS Switzerland AG</li>
    <li>Postfach</li>
    <li>6002 Luzern</li>
    <li>Verein Junge Gra,k</li>
    <li>Konto-Nr.: 248-165901.40W</li>
    <li>BIC: UBSWCHZH80A</li>
    <li>IBAN: CH41 0024 8248 1659 0140 W</li>
</ul>
                    
                  `,
                        },
                    ],
                },
            ],
        },
    ],
    footer: true,
};
