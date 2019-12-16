// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //create object to return contact info as object
    var contactObject = {};
    //assign any arguments passed into function as objects in contactObject to show each key and value.
    // since keys are id, nameFirst and nameLast, create keys for them that show any value passed in
    contactObject['id'] = id;
    contactObject['nameFirst'] = nameFirst;
    contactObject['nameLast'] = nameLast;
    // return the created object
    // should look like { id: undefined, nameFirst: undefined, nameLast: undefined }
    return contactObject;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     // contacts need a length property, so need to be an array
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
    // create addContact api
     addContact: function(contact) {
         // add contact indo to contacts array
        contacts.push(contact);
    },
    // create findContact api 
     findContact: function(fullName) {
         // loop through each string 
         for (var i = 0; i <= contacts.length - 1; i++) {
             // create conditional for if the full name is found and return it
             if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) {
                 return contacts[i];
                 
             
         }
         
     } // if not found in loop, return undefined
     return undefined;
}, 
// create removeContact api to remove a contact anywhere in the array
removeContact: function(contact) {
    for (var i = 0; i <= contacts.length - 1; i++) {
             // create conditional to look through all strings
             if (contacts[i] === contact) {
                 // use .splice to remove any contact
                 contacts.splice(i, 1);
             }
    }
},
printAllContactNames: function(){
    // create an array to list contacts 
    var contactArray = []
    // create loop to cycle through all contacts
    for (var i = 0; i <= contacts.length - 1; i++) {
        // push nameFirst and nameLast with space inbetween to array
        // this way it passes over id
        contactArray.push(contacts[i].nameFirst + " " + contacts[i].nameLast)
        
    } // return the contents of contactArray with line break (\n)
    return contactArray.join('\n')
    
}
};
// YOUR CODE GOES ABOVE HERE //

}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
