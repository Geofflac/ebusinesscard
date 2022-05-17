const get_details = async () => {
    response = await fetch("/details");
    details =  await response.json();
    document.getElementById("email").innerHTML = `<a href="mailto:${details.EMAIL}">${details.EMAIL}</a>`;
    document.getElementById("tel").innerHTML = `<a href="tel:${details.PHONE}">${details.PHONE}</a>`;
    return
}
get_details();
