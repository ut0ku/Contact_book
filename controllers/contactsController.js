const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, '../data/contacts.json');

const readContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const getAllContacts = async (req, res) => {
  try {
    let contacts = await readContacts();
    const { search } = req.query;
    if (search) {
      contacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getContactById = async (req, res) => {
  try {
    const contacts = await readContacts();
    const contact = contacts.find(c => c.id === parseInt(req.params.id));
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createContact = async (req, res) => {
  try {
    const contacts = await readContacts();
    const { name, phone, email } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    const newContact = { id: newId, name, phone, email: email || '' };
    contacts.push(newContact);
    await writeContacts(contacts);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateContact = async (req, res) => {
  try {
    const contacts = await readContacts();
    const index = contacts.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    const { name, phone, email } = req.body;
    if (name !== undefined) contacts[index].name = name;
    if (phone !== undefined) contacts[index].phone = phone;
    if (email !== undefined) contacts[index].email = email;
    await writeContacts(contacts);
    res.json(contacts[index]);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contacts = await readContacts();
    const index = contacts.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    const deletedContact = contacts.splice(index, 1)[0];
    await writeContacts(contacts);
    res.json(deletedContact);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};