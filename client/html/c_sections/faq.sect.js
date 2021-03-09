const Checkbox   = getSnippet("input-checkbox");
const EmailInput = getSnippet("input-email");
const IconNext   = getSnippet("icon-next");

module.exports = ({ content }) => {
  const html = splitTemp/*html*/`
    <section class="FAQ">

      <header class="header box">
        <h2>
          FAQ – Frequently asked questions
        </h2>
      </header>

      <div class="FAQ content">

        ${Dropdown({
          title: "Where do I send my Project?",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem aliquid voluptatum voluptas earum deserunt eveniet fugiat eligendi dignissimos, quidem quam saepe consectetur cum officia."
        })}

        ${Dropdown({
          title: "Who is Junge Grafik?",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem aliquid voluptatum voluptas earum deserunt eveniet fugiat eligendi dignissimos, quidem quam saepe consectetur cum officia."
        })}

        ${Dropdown({
          title: "How can I change my submission?",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem aliquid voluptatum voluptas earum deserunt eveniet fugiat eligendi dignissimos, quidem quam saepe consectetur cum officia."
        })}

        ${Dropdown({
          title: "Can I send you a printed version of my poster?",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem aliquid voluptatum voluptas earum deserunt eveniet fugiat eligendi dignissimos, quidem quam saepe consectetur cum officia."
        })}

      </div>

    </section>
  `;

  const css = /*css*/`
    .FAQ h2 {
      margin: 0;
    }
  `;

  return ["faq.snip", html, css];
};
