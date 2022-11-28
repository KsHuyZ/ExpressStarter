const mongoose = require("mongoose");


const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: false },
      comment: { type: String, required: false },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "user",
      },
    },
    {
      timestamps: true,
    }
  );

const fileSchema = mongoose.Schema(
    {
        {
            name: String,
            require: false
        },
        {
            description: String,
            require: false
        },
        {
            startDate: String,
            require: false
        },
        {
            endDate: String,
            require: false
        },
        {
            owner: String,
            require: false
        },
        {
            status: String,
            require: false
        },
        {
            isDone: String,
            require: false
    },
    {
        attackFile: String,
        require: false
    },
    review :[reviewSchema]
    },
    {
      timestamps: true,
    }
  );

const timeLineModel = mongoose.Schema(
  {
    idDepartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "department",
        },
        nameProject: {
            type: String,
            require: false
        },
        requiredFile: [
            fileSchema
        ],
        progressFile: [
            fileSchema
        ],
        pendingFile: [
            fileSchema
        ],
        hasDoneFile: [
            fileSchema
        ],
        editFile: [
            fileSchema
        ]

      
  },

  { timestamps: true }
);

module.exports = mongoose.model("timeLineModel", timeLineModel);
