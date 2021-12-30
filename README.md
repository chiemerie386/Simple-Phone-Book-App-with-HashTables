### Simple-Phone-Book-App-with-HashTables

## HOW TO USE THE PHONE BOOK

# Add Unique Phone Numbers

`
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
`

# get list of phone numbers

`
JosephPhoneBook.GetPhoneList()
`

# Get unique phone details using the phone number

`
JosephPhoneBook.getPhoneNumber('08033273192')
`
