const mongoose = require('mongoose');
const { Student, WorksnapsTimeEntry } = require('./StudentSchema');

mongoose.connect('mongodb+srv://teepukhan729:F0j6n29nA83vVLlA@jobrobo.9x6eki4.mongodb.net/edunify?retryWrites=true&w=majority');

const displayStudentsWithTimeEntries = async () => {
  try {
    const students = await Student.find();

    for (const student of students) {
      const timeEntries = await WorksnapsTimeEntry.find({ student: student._id }).populate('student');
      console.log(`Student: ${student.firstName} ${student.lastName}`);
      console.log('Time Entries:');
      timeEntries.forEach(entry => {
        console.log(entry.timeEntries);
      });
      console.log('-------------------------');
    }
  } catch (error) {
    console.error('Error fetching students and time entries:', error);
  } finally {
    mongoose.connection.close();
  }
};

displayStudentsWithTimeEntries();
