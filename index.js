const xcEl = document.getElementById("currency1");

const firstWorthEl = document.getElementById("worth-first");

const xcEl2 = document.getElementById("currency2");

const secondWorthEl = document.getElementById("worth-second");

const detailsEl = document.getElementById("details");

xcEl.addEventListener("change", updateRate);

xcEl2.addEventListener("change", updateRate);

firstWorthEl.addEventListener("input", updateRate);

secondWorthEl.addEventListener("input", updateRate);

// e4aa127a7269c47b7fc99e9b72f25a342ddeac50 api-key

const url = `https://v6.exchangerate-api.com/v6/6a26ca64517a36e62ecebec6/latest/${xcEl.value}`;
const queryParameters = {
  access_key: " 6a26ca64517a36e62ecebec6"
};
const queryString = new URLSearchParams(queryParameters).toString();
const requestUrl = `${url}`;

async function updateRate() {
  try {
    const response = await fetch(requestUrl, {
      method: "GET"
    });
    if (!response) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data);
    rate = data.conversion_rates[xcEl2.value];
    console.log(xcEl.value);
    console.log(xcEl2.value);

    console.log(rate);

    detailsEl.innerText = ` 1 ${xcEl.value} = ${rate} ${xcEl2.value}`;
    secondWorthEl.value = rate * firstWorthEl.value;
  } catch (error) {
    console.error("Error", error);
  }
}
