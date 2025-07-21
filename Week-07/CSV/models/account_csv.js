const mongoose = require('mongoose');

const CsvDataSchema = new mongoose.Schema({
  Year: {
    type: Number,
    required: true,
  },
  Industry_aggregation_NZSIOC: {
    type: String,
    required: true,
  },
  Industry_code_NZSIOC: {
    type: String,
    required: true,
  },
  Industry_name_NZSIOC: {
    type: String,
    required: true,
  },
  Units: {
    type: String,
    required: true,
  },
  Variable_code: {
    type: String,
    required: true,
  },
  Variable_name: {
    type: String,
    required: true,
  },
  Variable_category: {
    type: String,
    required: true,
  },
  Value: {
    type: Number,
    required: true,
  },
  Industry_code_ANZSIC06: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('CsvData', CsvDataSchema);
