## Simple-Phone-Book-App-with-HashTables
I used Hash-Tables to achieve a better Time Complexity. I also used double hashing to reduce index collision.

# HOW TO USE THE PHONE BOOK

 # Add Unique Phone Numbers

```javascript
let JosephPhoneBook = new PhoneBook ()

let musaContact= {
    phoneNumber: "08027856784",
    name: "Musa Abubakar",
    email: "musaabubakar@gmail.com"
}

let chisomContact= {
    phoneNumber: "08033273192",
    name: "Chisom",
    email: "chisom@gmail.com"
}

JosephPhoneBook.AddPhoneNumber(musaContact)
JosephPhoneBook.AddPhoneNumber(chisomContact)
```

 # Get list of phone numbers

```javascript
JosephPhoneBook.GetPhoneList()
```

 # Get unique phone details using the phone number

```javascript
JosephPhoneBook.getPhoneNumber('08033273192')
```
