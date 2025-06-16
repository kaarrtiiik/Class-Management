const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.POSTGRES_URI);

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  class_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  class_description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'classes',
  timestamps: false
});

// Create a new class
async function createClass({ class_name, class_description }) {
  try {
    const newClass = await Class.create({ class_name, class_description });
    return newClass;
  } catch (err) {
    console.error('Error in createClass:', err);
    throw err;
  }
}

// Get all classes
async function getAllClasses() {
  try {
    return await Class.findAll();
  } catch (err) {
    console.error('Error in getAllClasses:', err);
    throw err;
  }
}

// Get class by ID
async function getClassById(id) {
  try {
    return await Class.findByPk(id);
  } catch (err) {
    console.error('Error in getClassById:', err);
    throw err;
  }
}

// Update class
async function updateClass(id, { class_name, class_description }) {
  try {
    const [updated] = await Class.update({ class_name, class_description }, { where: { id } });
    if (updated) {
      return await Class.findByPk(id);
    }
    return null;
  } catch (err) {
    console.error('Error in updateClass:', err);
    throw err;
  }
}

// Delete class
async function deleteClass(id) {
  try {
    await Class.destroy({ where: { id } });
  } catch (err) {
    console.error('Error in deleteClass:', err);
    throw err;
  }
}

module.exports = {
  Class,
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass
};