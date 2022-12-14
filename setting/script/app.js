let settingData = {};

// TODO: 아래와 같은 방법으로 config.json 전부 만들기.

class Input extends HTMLElement {
  connectedCallback() {
    // const wrapper = document.createElement(`div`);
    // wrapper.className = `input`;

    const label = document.createElement(`label`);
    label.setAttribute(`for`, this.getAttribute(`name`));
    label.innerText = this.getAttribute(`label`);
    this.appendChild(label);

    const input = document.createElement(`input`);
    input.type = this.getAttribute(`checkbox`) === `true` ? `checkbox` : `text`;
    input.id = this.getAttribute(`name`);
    input.name = this.getAttribute(`name`);
    input.placeholder = this.getAttribute(`placeholder`);
    this.appendChild(input);

    // this.appendChild(wrapper);
  }
}

customElements.define(`input-`, Input);

const title = document.querySelector(`#title`);
const nick = document.querySelector(`#nick`);
const url = document.querySelector(`#url`);
const baseurl = document.querySelector(`#baseurl`);
const github = document.querySelector(`#github`);
const desc = document.querySelector(`#desc`);

const giscus = {};
giscus.repo = document.querySelector(`#repo`);
giscus.repoid = document.querySelector(`#repoid`);
giscus.category = document.querySelector(`#category`);
giscus.categoryid = document.querySelector(`#categoryid`);
giscus.mapping = document.querySelector(`#mapping`);
giscus.reactions = document.querySelector(`#reactions`);
giscus.inputpostop = document.querySelector(`#inputpostop`);

function arrayMove(arr, oldIndex, newIndex) {
  if (newIndex >= arr.length) {
    let k = newIndex - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr; // for testing
}

window.addEventListener(`load`, async () => {
  settingData = await fetch(`/get`).then((res) => res.json());

  class Nav extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = ``;
      const list = document.createElement(`div`);
      list.className = `nav-list`;

      const template = (name, icon, path, index) => {
        const a = document.createElement(`div`);
        a.className = `nav-item`;
        a.setAttribute(`index`, index);

        const nameInput = document.createElement(`input`);
        nameInput.type = `text`;
        nameInput.placeholder = `Name`;
        nameInput.value = name;
        a.appendChild(nameInput);

        const iconInput = document.createElement(`input`);
        iconInput.type = `text`;
        iconInput.placeholder = `Icon`;
        iconInput.value = icon;
        a.appendChild(iconInput);

        const pathInput = document.createElement(`input`);
        pathInput.type = `text`;
        pathInput.placeholder = `Path`;
        pathInput.value = path;
        a.appendChild(pathInput);

        const upNDown = document.createElement(`div`);
        upNDown.className = `und`;
        const up = document.createElement(`button`);
        up.innerText = `▲`;
        up.addEventListener(`click`, () => {
          arrayMove(
            settingData.nav,
            parseInt(a.getAttribute(`index`)),
            parseInt(a.getAttribute(`index`)) - 1,
          );
          this.render();
        });
        if (a.getAttribute(`index`) === `0`) up.disabled = `disabled`;
        upNDown.appendChild(up);

        const down = document.createElement(`button`);
        down.innerText = `▼`;
        down.addEventListener(`click`, () => {
          arrayMove(
            settingData.nav,
            parseInt(a.getAttribute(`index`)),
            parseInt(a.getAttribute(`index`)) + 1,
          );
          this.render();
        });
        if (a.getAttribute(`index`) === `${settingData.nav.length - 1}`)
          down.disabled = `disabled`;
        upNDown.appendChild(down);

        a.appendChild(upNDown);

        const removeBtn = document.createElement(`button`);
        removeBtn.innerText = `×`;
        removeBtn.className = `rmbtn`;
        removeBtn.addEventListener(`click`, () => {
          settingData.nav.splice(parseInt(a.getAttribute(`index`)), 1);
          this.render();
        });
        a.appendChild(removeBtn);

        return a;
      };

      const add = () => {
        const a = document.createElement(`div`);
        const nameInput = document.createElement(`input`);
        nameInput.type = `text`;
        nameInput.placeholder = `Name`;
        a.appendChild(nameInput);

        const iconInput = document.createElement(`input`);
        iconInput.type = `text`;
        iconInput.placeholder = `Icon`;
        a.appendChild(iconInput);

        const pathInput = document.createElement(`input`);
        pathInput.type = `text`;
        pathInput.placeholder = `Path`;
        a.appendChild(pathInput);

        const addBtn = document.createElement(`button`);
        addBtn.innerText = `+`;
        addBtn.className = `rmbtn`;

        addBtn.addEventListener(`click`, () => {
          const { value: name } = nameInput;
          const { value: icon } = iconInput;
          const { value: path } = pathInput;

          if (!nameInput.value) return;
          if (!/[a-zA-Z-]+:[a-zA-Z-]+/i.test(iconInput.value)) return;
          if (
            !pathInput.value.startsWith(`/`) &&
            !pathInput.value.startsWith(`//`)
          )
            return;
          settingData.nav.push({
            name,
            icon,
            path,
          });
          nameInput.value = ``;
          iconInput.value = ``;
          pathInput.value = ``;
          this.render();
        });

        a.appendChild(addBtn);
        return a;
      };

      this.appendChild(add());
      this.appendChild(document.createElement(`hr`));

      for (const [i, n] of settingData.nav.entries()) {
        list.appendChild(template(n.name, n.icon, n.path, i));
      }

      this.appendChild(list);
    }
  }

  customElements.define(`nav-`, Nav);

  title.value = `${settingData.title}`;
  nick.value = `${settingData.nickname}`;
  url.value = `${settingData.siteUrl}`;
  baseurl.value = `${settingData.baseUrl}`;
  github.value = `${settingData.github}`;
  desc.value = `${settingData.description}`;

  giscus.repo.value = `${settingData.giscus.repo}`;
  giscus.repoid.value = `${settingData.giscus.repoId}`;
  giscus.category.value = `${settingData.giscus.category}`;
  giscus.categoryid.value = `${settingData.giscus.categoryId}`;
  giscus.mapping.value = `${settingData.giscus.mapping}`;
  giscus.reactions.checked =
    `${settingData.giscus.reactionsEnabled}` === `1`
      ? true
      : `${settingData.giscus.reactionsEnabled}` === `0`
      ? false
      : null;
  giscus.inputpostop.checked =
    `${settingData.giscus.inputPosition}` === `top`
      ? true
      : `${settingData.giscus.inputPosition}` === `bottom`
      ? false
      : null;
});

const save = document.querySelector(`.save`);

save.addEventListener(`click`, async () => {
  settingData.title = `${title.value}`;
  settingData.nickname = `${nick.value}`;
  settingData.siteUrl = `${url.value}`;
  settingData.baseUrl = `${baseurl.value}`;
  settingData.github = `${github.value}`;
  settingData.description = `${desc.value}`;

  settingData.giscus.repo = `${giscus.repo.value}`;
  settingData.giscus.repoId = `${giscus.repoid.value}`;
  settingData.giscus.category = `${giscus.category.value}`;
  settingData.giscus.categoryId = `${giscus.categoryid.value}`;
  settingData.giscus.mapping = `${giscus.mapping.value}`;
  settingData.giscus.reactionsEnabled = giscus.reactions.checked ? `1` : `0`;
  settingData.giscus.inputPosition = giscus.inputpostop.checked
    ? `top`
    : `bottom`;

  const body = JSON.stringify(settingData);
  await fetch(`/set`, {
    method: `POST`,
    headers: {
      Accept: `application/json`,
      'Content-Type': `application/json`,
    },
    body,
  });
});
