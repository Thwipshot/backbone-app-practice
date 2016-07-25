App.Views.Directory = Backbone.View.extend({

  events: {
    'click .controls .add': 'addForm',
    'submit .controls form': 'addSubmit'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'addForm', 'addSubmit');
  },

  render: function() {
    var $container = this.$('.listing').empty();

    App.Contacts.each(function(contact) {
      new App.Views.Contact({
        model: contact,
        $container: $container
      }).render();
    });

    return this;
  },

  addForm: function() {
    this.$('.controls form').show().find('input.firstName').focus();
  },

  addSubmit: function(event) {
    event.preventDefault();
    var $form = this.$('.controls form');

    var newContact = new App.Models.Contact({
      firstName: $('input.firstName', $form).val(),
      lastName: $('input.lastName', $form).val(),
      phoneNumber: $('input.phoneNumber', $form).val(),
      email: $('input.email', $form).val()
    });

    if (newContact.isValid()) {
      App.Contacts.add(newContact);
      $form.hide();
      $('input[type=text]', $form).val('').blur();
    } else {
      alert(newContact.validationError);
    }
  }
});
