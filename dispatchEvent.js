var optionToClick = document.querySelector("#shipping_country > option:nth-child(119)");
var select = document.querySelector("#shipping_country");

select.value = optionToClick.value;

var changeEvent = new Event('change', {
    bubbles: true,
    cancelable: true
});

select.dispatchEvent(changeEvent);
