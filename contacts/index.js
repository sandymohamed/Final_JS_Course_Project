// html elements values
let name = document.getElementById('name').value;
let phone = document.getElementById('phone').value;
let email = document.getElementById('email').value;

let searchTerm = document.getElementById('search').value.toLowerCase();
let contactList = document.getElementById('contacts');

// array مصفوفة تحمل بداخلها كل الاسماء والبيانات
let contacts = [];

// function تظهر العناصر علي الشاشة
function displayContacts() {
    contactList.innerHTML = ''; // Clear the list

    // Loops
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        let li = document.createElement('li');
        li.textContent = `Name: ${contact.name},   Phone: ${contact.phone},   Email: ${contact.email}`;
        contactList.appendChild(li);
    }
}


// function addContact انشئ 
// احرص على عدم تغيير الاسم 
// ليس فارغا وانهم يحتون علي قيم نصية name phone email والتى تقوم بالتاكد اولا ان كل من 
// ""مساعدة: النص الفارغ تكون قيمته مساوية 
// alert("Please fill out all fields.");اذا كان فارغا اظهر 
// اذا كان كل متغير به قيمة اجمع هذه القيم معا و ضيفهم الي الcontacts array 
// displayContacts() اظهرهم علي الشاشة من خلال 








// function searchContact انشئ 
// احرص على عدم تغيير الاسم 
// والتى تبحث فى الcontacts 
// علي كل عنصر بداخله هل name || phone|| email يحتوي علي searchTerm
// اذا كان البحث صحيح استخدم هذا الكود
//     let li = document.createElement('li');
// li.textContent = `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`;
// contactList.appendChild(li);
// لاضافة contact والذى هو العنصر الذي تطابق مع البحث


// Display contacts on page load (if any)
displayContacts();
