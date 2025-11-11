const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const users = require('./data/users');
const contractors = require('./data/contractors');
const repairRequests = require('./data/repairRequests');
const User = require('./models/userModel');
const Contractor = require('./models/contractorModel');
const RepairRequest = require('./models/repairRequestModel');
const connectDB = require('./config/db');

dotenv.config({ path: path.resolve(__dirname, '.env') });

const importData = async () => {
  try {
    await RepairRequest.deleteMany();
    await Contractor.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleContractors = contractors.map(contractor => {
      return { ...contractor };
    });

    const createdContractors = await Contractor.insertMany(sampleContractors);

    const sampleRepairRequests = repairRequests.map(request => {
      return { ...request, user: adminUser, assignedContractor: createdContractors[0]._id };
    });

    await RepairRequest.insertMany(sampleRepairRequests);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await RepairRequest.deleteMany();
    await Contractor.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const runSeeder = async () => {
  await connectDB();
  if (process.argv[2] === '-d') {
    await destroyData();
  } else {
    await importData();
  }
}

runSeeder();
