const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  description: String,
  status: { type: String, default: 'Open' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', TicketSchema);
