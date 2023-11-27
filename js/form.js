const btn = document.getElementById("run_task");
const search_btn = document.getElementById("search_info");
const array_btn = document.getElementById("array_task");

const customerName = document.getElementById("customerName");
const phoneNumber = document.getElementById("phoneNumber");
const country = document.getElementById("country");
const region = document.getElementById("region");
const furnitureType = document.getElementById("furnitureType");
const paymentType= document.getElementById("paymentType");
const textarea = document.getElementById("textarea");

btn.onclick = () => {
    console.log("click");
    console.log(`Інформація отрамана з форми:\n
        1. Імʼя замовника: ${customerName.value}\n
        2. Номер телефону: ${phoneNumber.value}\n
        3. Країна доставки: ${country.value}\n
        4. Регіон доставки: ${region.value}\n
        5. Тип мебелі: ${furnitureType.value}\n
        6. Метод оплати: ${paymentType.value}`);
};

search_btn.addEventListener("click", () => {
    const text = textarea.value;
    const digitCount = (text.match(/\d/g) || []).length;
    console.log(`Кількість цифр в тексті: ${digitCount}`);
})
array_btn.addEventListener("click", () => {
    const arrayLength = 10;
    const array = [];
    fillArray(array, arrayLength);
    calculation(array);
});

function fillArray(array, arrayLength) {
    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.random() * 51;
        array.push(randomNumber);
    }
}
function calculation(array) {
    let sum = 0;
    let dobutok = 1;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            sum += array[i];
        } else {
            dobutok *= array[i];
        }
    }

    console.log("Sum: " + sum);
    console.log("Dobutok: " + dobutok);
}