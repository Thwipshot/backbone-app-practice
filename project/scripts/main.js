var App = {
  Models: {},
  Collections: {},
  Contacts: null
};

$(function() { // Run this code when the DOM is ready
  window.tom = new App.Models.Contact({
    firstName: 'Thomas',
    lastName: 'Hunter',
    phoneNumber: '9895135499',
    email: 'me@thomashunter.name'
  });

  App.Contacts = new
  App.Collections.Contact();
  App.Contacts.add(window.tom);

  App.Contacts.add({
    firstName: 'Rupert',
    lastName: 'Styx',
    phoneNumber: '9895551212',
    email: 'rupertstyx@example.com'
  });

  App.Contacts.add({});

  var contactListing = '';
  App.Contacts.each(function(contact) {
    contactListing += "<div>" +
    contact.get('firstName') + " " +
    contact.get('lastName') + " ";

    if (contact.isValid()) {
      contactListing += "(valid)";
    } else {
      contactListing += "(invalid)";
    }

    contactListing += "</div>";
  });
  $('#display').html(contactListing);
});
