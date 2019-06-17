function Contact(firstName, lastName, number){
  this.firstName = firstName,
  this.lastName = lastName,
  this.number = number
}

Contact.prototype.getNumber = function(){
  return this.number;
}

Contact.prototype.getId = function(){
  return this.id;
}

function addressBook(bookName){
  this.name = bookName,
  this.idCounter = 0,
  this.contactList = []
}

addressBook.prototype.addContact = function(contact){
  Contact.id = this.idCounter;
  this.idCounter++;
  this.contactList.push(contact);
}

Contact.prototype.getFullName = function(){
  return this.firstName + " " + this.lastName;
}

addressBook.prototype.deleteContact = function(id){
  //true if contact hopefully
  var contact = this.getContactById(id);
  if (contact){
    delete(contact);
  }
}

addressBook.prototype.getContactById = function(id){
  for (var i = 0; i < this.contactList.length; i++){
    if (this.contactList[i].id === id){
      return this.contactList[i];
    }
  }
}

addressBook.prototype.logContacts = function(){
  this.contactList.forEach(function(c){
    c.logContact();
  })
}

Contact.prototype.logContact = function(){
  console.log(this.getFullName() + ": " + this.getNumber() + ", ID; " + this.getId());
}

var ab = new addressBook("myBook");
var newContact = new Contact("Emerson", "Jordan", 234);
ab.addContact(newContact);
newContact.logContact();
ab.addContact(new Contact("Rochelle", "ASDF", 903));
ab.logContacts();
