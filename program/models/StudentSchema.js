const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the StudentSchema
const StudentSchema = new Schema({
  firstName: { type: String, trim: true, default: '' },
  lastName: { type: String, trim: true, default: '' },
  displayName: { type: String, trim: true },
  municipality: { type: String }
}, { timestamps: true });

const Student = mongoose.model('Student', StudentSchema);

const WorksnapsTimeEntrySchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'Student' },
  timeEntries: { type: Object }
}, { timestamps: true });

const WorksnapsTimeEntry = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntrySchema);

module.exports = { Student, WorksnapsTimeEntry };
