const mongoose = require('mongoose');
const { Student, WorksnapsTimeEntry } = require('./StudentSchema');

mongoose.connect('mongodb+srv://teepukhan729:F0j6n29nA83vVLlA@jobrobo.9x6eki4.mongodb.net/edunify?retryWrites=true&w=majority');

const insertSampleData = async () => {
  try {
    const students = [
      { firstName: 'John', lastName: 'Doe', displayName: 'JohnD', municipality: 'New York' },
      { firstName: 'Jane', lastName: 'Smith', displayName: 'JaneS', municipality: 'Los Angeles' }
    ];

    const insertedStudents = await Student.insertMany(students);

    const timeEntries = [
      { student: insertedStudents[0]._id, timeEntries: { date: '2023-07-10', hours: 5 } },
      { student: insertedStudents[1]._id, timeEntries: { date: '2023-07-11', hours: 3 } }
    ];

    await WorksnapsTimeEntry.insertMany(timeEntries);

    console.log('Sample data inserted successfully');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    mongoose.connection.close();
  }
};

insertSampleData();
